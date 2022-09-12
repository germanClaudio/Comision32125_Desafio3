const express = require('express')
const app = express()

const Container = require('./Container')
const PORT = 8080 //process.env.PORT || 

const products = new Container('./productos.txt')

app.get('/productos', (req, res) => {

    res.json(products.getAll())
    
})

app.get('/productoRandom', (req, res) => {

    const randomId = products.getRandomInt()
    res.json(products.getById(randomId))
})

const server = app.listen(PORT, ()=> {
    console.log(`Servidor http escuchando en el puerto: ${server.address().port}`)
})

server.on('error', (err) => console.log(`Error en server ${err}`))
