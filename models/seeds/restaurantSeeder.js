const mongoose = require('mongoose')
const restaurantList = require('./restaurant.json')
const Restaurant = require('../restaurant') // 載入 restaurant model

mongoose.connect('mongodb://localhost/restaurant_list_crud', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  restaurantList.results.forEach((restaurant) => {
    Restaurant.create(restaurant)
  })
  console.log('done')
})

