const restaurantList = require('./restaurant.json')
const Restaurant = require('../restaurant') // 載入 restaurant model
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  restaurantList.results.forEach((restaurant) => {
    Restaurant.create(restaurant)
  })
  console.log('done')
})
