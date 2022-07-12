const express = require('express')
const app = express()
// const app = require('express')();
const path = require('path');

app.use(express.static('./navbar-app'))
app.get('/', (req, res) => {
    console.log('user hit the resource')
    // res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
  })
  

  
  app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
  })


app.listen(5000, () => {
    console.log('server is listening on port 5000...')
  })