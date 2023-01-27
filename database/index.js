const mongoose = require ('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser} = require ('../app/config');

// open connection to db
// mongoose.connect (`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
mongoose.connect (`mongodb+srv://admin:admin123@cluster0.bpvhy5y.mongodb.net/?retryWrites=true&w=majority`);
const db = mongoose.connection;

module.exports = db;