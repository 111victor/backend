const fs = require('fs');
const csv = require('csv-parser');
const pgp = require('pg-promise')();

const csvFilePath = '../properties.csv';

const connection = {
    host: 'host.docker.internal',
    port: '5432',
    database: 'properties',
    user: 'postgres',
    password: 'password'
};

const db = pgp(connection);



fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', async (row) => {
        try {
        await db.none('INSERT INTO properties (sold_date, property_type, address, city, state, zip, price, beds, baths, square_feet, lot_size, year_built, days_on_market, monthly_hoa, mls_number, identifier, latitude, longitude, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)', 
                    [
                        row.sold_date, 
                        row.property_type, 
                        row.address, 
                        row.city, 
                        row.state, 
                        row.zip, 
                        safeParseInt(row.price),
                        safeParseInt(row.beds),
                        safeParseInt(row.baths),
                        safeParseInt(row.square_feet),
                        safeParseInt(row.lot_size),
                        row.year_built,
                        safeParseInt(row.days_on_market),
                        safeParseInt(row.monthly_hoa),
                        row.mls_number,
                        row.identifier,
                        safeParseFloat(row.latitude),
                        safeParseFloat(row.longitude),
                        row.description
                    ]);
        
        } catch (error) {
            console.error("Error inserting into the database", error);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');
    });

    const safeParseInt = (value, defaultValue = null) => {
      if (!value) {
          return defaultValue;
      } else {
          return parseInt(value);
      }
  };
  
  const safeParseFloat = (value, defaultValue = null) => {
      if (!value) {
          return defaultValue;
      } else {
          return parseFloat(value);
      }
  };
