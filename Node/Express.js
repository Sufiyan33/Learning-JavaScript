/*
    Express js allow to use javaScript in backend or You can create web Server.
    Express also server html request.
    You can create portfolio using javaScript in backend... 

    Use below command to install exporess : npm install express
    Important : You need to remove "type": "pdf" from package.json file
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // You can also write custome logic here...
    console.log(req)
  res.send('Hello Sufiyan!')
})

app.get('/contact', (req, res) => {
  res.send('Contact page!')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/sports', (req, res) => {
  res.send('Sport Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})

