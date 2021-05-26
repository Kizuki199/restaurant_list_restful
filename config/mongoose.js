const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb connection error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connection successful')
})

module.exports = db