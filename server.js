const express = require('express')

const app = express()
const routes = require('./routes')

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'pug')

app.use(express.static(__dirname+'/public'))
app.use('/', routes)
  
// catch 404 error
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// handle errors
app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
})

// Listen  
app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'))
})