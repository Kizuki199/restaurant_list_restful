const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// index page
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(Restaurant => res.render('index', { Restaurant }))
    .catch(error => console.error(error))
})

// search
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const query = new RegExp(keyword.trim(), 'i')
  return Restaurant.find({
    $or: [{ name: query }, { name_en: query }, { category: query }]
  })
    .lean()
    .then(Restaurant => res.render('index', { Restaurant, keyword }))
    .catch(error => console.error(error))
})

// sort
router.get('/sort', (req, res) => {
  const { select } = req.query
  Restaurant.find()
    .lean()
    .sort(select)
    .then(Restaurant => res.render('index', { Restaurant, select }))
    .catch(error => console.log(error))
})

module.exports = router