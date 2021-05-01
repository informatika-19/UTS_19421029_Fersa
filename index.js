const express = require('express')
const app = express()
const bodypanser = require('body-parser') 
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Penjualan',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
  console.log('berhasil connect ke database')
}).catch((e) =>{
  console.log(e)
  console.log('gagal connect ke database')
})

app.use(bodypanser.json({
    extends: true,
    limit: '20mb' 
}))

app.use(bodypanser.urlencoded({
    extends: true,
    limit: '20mb'
}))


app.use('/Barang/', require('./routes/Barang'))

app.listen(3000, () => {
    console.log('server Startet')
})
