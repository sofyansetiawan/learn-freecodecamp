var express = require('express')
const bodyParser = require("body-parser")
var app = express()

app.use(express.static(__dirname))

app.use(bodyParser.urlencoded( { extended: false }))

app.use(function middleware(req, res, next) {
  const string = req.method + " " + req.path + " - " + req.ip
  console.log(string)
  next()
});

console.log("Hello World")

app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html"
  res.sendFile(absolutePath)
  //res.send('Hello Express');
})

app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({"message": "HELLO JSON"})
  }
  else{
    res.json({"message": "Hello json"})
  }
})

app.get('/now', function(req, res, next) {
  req.time = new Date().toString()
  console.log(req.time)
  next()
}, function(req, res) {
  res.json({time: req.time})
})

app.get('/:word/echo', function(req, res) {
  let word = req.params.word
  res.json({echo: word})
})

app.get('/name', function(req, res) {
  let first = req.query.first || ""
  let last = req.query.last || ""
  res.json({name: `${first} ${last}`});
});

app.post('/name', function(req, res) {
  let first = req.body.first || ""
  let last = req.body.last || ""
  res.json({name: `${first} ${last}`});
});

module.exports = app;
