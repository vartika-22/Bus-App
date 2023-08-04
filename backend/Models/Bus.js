const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let busSchema = new Schema({
  BusId: {
    type: String
  },
  source: {
    type: String
  },
  destination: {
    type: String
  },
  noOfSeat: {
    type: Number
  },
  fare: {
    type: Number
  }
}, {
    collection: 'bus'
  })

module.exports = mongoose.model('bus', busSchema)