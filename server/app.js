var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var routes = require("./routes/routes.js")(app)

var server = app.listen(3001, function () {
    console.log("at http://localhost:%s", server.address().port)
})
// axios.get("http://localhost:8080/usuarios")
// .then((res) => {
//   return res
// })
// .catch((err) => {
//   return err.response
// })

// app.get('/', (req, res) => {
//   res.send('Hello World! '+`${resposta}`)
// })