const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
  category: String,
  image: String,
  location: String,
  phone: String,
  google_map: String,
  rating: Number,
  description: String,

})
module.exports = mongoose.model('Restaurant', restaurantSchema)