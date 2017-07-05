let logger = require('../lib/logger')
let path = require('path')
let express = require('express')
let cons = require('consolidate')
let home = require('../pages/home')
let about = require('../pages/about')
let finance = require('../pages/finance')
let sales = require('../pages/sales')
let marketing = require('../pages/marketing')
let hr = require('../pages/hr')
let terms = require('../pages/terms')

let app = express()
app.engine('html', cons.lodash)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.get('/about', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: about() })
})
app.get('/finance-start-up-jobs', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: finance() })
})
app.get('/sales-start-up-jobs', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: sales() })
})
app.get('/marketing-start-up-jobs', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: marketing() })
})
app.get('/hr-start-up-jobs', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: hr() })
})
app.get('/terms', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: terms() })
})
app.get('/', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: home() })
})
app.listen(80, () => logger.log('info', 'App running'))
