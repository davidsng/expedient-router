var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
var root = __dirname + '/'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))

app.listen(8080)
