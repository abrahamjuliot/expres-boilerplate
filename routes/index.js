const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})
router.get('/projects', (req, res) => {
  res.render('projects', {name: 'Abraham'})
})

module.exports = router