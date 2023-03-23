// npm install -g nodemon
// nodemon

const express = require('express');
const axios = require("axios");
const app = express();
const port = 3001;
const cors = require('cors')

app.use(cors());

var resposta = ""
axios.get("http://localhost:8080/usuarios")
.then(data => resposta = data.data)
.catch(err => resposta = err)

app.get('/', (req, res) => {
  res.send('Hello World! '+`${resposta}`)
})

//app.get('http://ip.jsontest.com/', (req, res) => {})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});