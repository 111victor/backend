import { Properties } from "../entities/property.entity";
import {
  PropertyDescription,
  PropertyDetails,
} from "../interfaces/propertyDescription";

export const transformPropertyDescription = (property: Properties) => {
  const propertyDescription: PropertyDescription = {
    id: property.id,
    price: property.price,
    beds: property.beds,
    baths: property.baths,
    square_feet: property.square_feet,
    property_type: property.property_type,
    address: {
      street: property.address,
      city: property.city,
      state: property.state,
      zip: property.zip,
    },
    upvote: property.upvote,
    downvote: property.downvote,
  };
  return propertyDescription;
};

export const transformPropertyDetails = (property: Properties) => {
  const propertyDescription: PropertyDetails = {
    price: property.price,
    beds: property.beds,
    baths: property.baths,
    square_feet: property.square_feet,
    description: property.description,
    address: {
      street: property.address,
      city: property.city,
      state: property.state,
      zip: property.zip,
    },
    id: property.id,
    sold_date: property.sold_date,
    property_type: property.property_type,
    lot_size: property.lot_size,
    year_built: property.year_built,
    days_on_market: property.days_on_market,
    monthly_hoa: property.monthly_hoa,
    mls_number: property.mls_number,
    identifier: property.identifier,
    latitude: property.latitude,
    longitude: property.longitude,
    upvote: property.upvote,
    downvote: property.downvote,
  };
  return propertyDescription;
};
