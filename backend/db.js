const mongoose = require('mongoose');

const db = mongoose.connection;

db.on('error', err => console.error(err))
db.once('open', res => console.log('connected to DB'))

module.exports = mongoose
