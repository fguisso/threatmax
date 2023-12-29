const config = {
    server: {
      port: process.env.PORT || 8000,
      host: process.env.HOST || "localhost",
      debug: process.env.DEBUG || "info",
    },
    database: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/threatmax-db',
    }
  };
  
  export default config;