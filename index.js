require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./model/product.model.js')
const productRoute = require('./routes/product.route.js');
const port = 3000

//middleware
app.use(express.json())


//routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
  res.send('Hello World! i am hello')
})



app.get('/login',(req,res)=>{
  res.send('<h1>login at ali.com </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://sunasaraabbas7:BcBVVnaOlUf5Vm3C@backend.esgoe6k.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
  .then((req, res) => {
    console.log("connected to database")
    app.listen
  })
  .catch(() => {
    console.log("connection failed")
  })
