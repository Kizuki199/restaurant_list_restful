const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      sort: function (select, selectValue) {
        return select === selectValue ? 'selected' : ''
        // if (select === selectValue) {
        //   return 'selected' // <option selected>
        // } else {
        //   return ''
        // }
      }
    }
  }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(3000, () => {
  console.log(`Express is listening on localhost:${port}`)
})
