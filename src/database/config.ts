export const pageLimit = 10;

export const getDbConfig = ()=> {
    const host = "localhost";
    const username = "postgres";
    const password = "";
    const port = 5432;
    const database = "properties";
    
    return {
      db: {
        host,
        database,
        port,
        username,
        password,
      },
    };
  };