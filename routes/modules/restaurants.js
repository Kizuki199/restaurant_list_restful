const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// new page
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/new', (req, res) => {
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

// detail page
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(Restaurant => res.render('detail', { Restaurant }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(Restaurant => res.render('edit', { Restaurant }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(Restaurant => {
      Restaurant = Object.assign(Restaurant, req.body)
      return Restaurant.save()
    })
    .then(() => res.redirect(`/restaurant/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(Restaurant => Restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router