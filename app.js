'use strict'

var express = require('express')
var app = express()

app.get('/hello', function (req, res) {
  res.json({
    message: 'hello'
  })
})

app.get('/world',function (req,res) {
  res.json({
    message:'world'
  })
});


app.listen(4000, function (err) {
  if (err) {
    console.log(err)
  }
})

module.exports = app
