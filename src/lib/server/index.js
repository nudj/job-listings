let logger = require('../lib/logger')
let path = require('path')
let express = require('express')
let cons = require('consolidate')
let bodyParser = require('body-parser')
let home = require('../pages/home')
let about = require('../pages/about')
let terms = require('../pages/terms')
let success = require('../pages/success')

const roleMap = {
  finance: require('../pages/finance'),
  sales: require('../pages/sales'),
  marketing: require('../pages/marketing'),
  hr: require('../pages/hr')
}

let renderFormPage = (req, res) => {
  const role = req.path.slice(1).split('-')[0]
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: roleMap[role]({role}) })
}

let app = express()
app.engine('html', cons.lodash)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/about', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: about() })
})
app.get('/finance-start-up-jobs', renderFormPage)
app.get('/sales-start-up-jobs', renderFormPage)
app.get('/marketing-start-up-jobs', renderFormPage)
app.get('/hr-start-up-jobs', renderFormPage)
app.get('/terms', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: terms() })
})
app.get('/success', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: success() })
})
app.get('/', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  res.render('index', { url: req.url, body: home() })
})
app.listen(80, () => logger.log('info', 'App running'))
