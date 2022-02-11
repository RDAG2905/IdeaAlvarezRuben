const routerProductos = require('./Rutas/RouterProductos')
const routerCarrito = require('./Rutas/RouterCarrito')
const express = require('express')
port = 8080 || process.env.port

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use('/api/productos',routerProductos)
app.use('/api/carrito',routerCarrito)
app.use((req, res) => {
    res.json({
    error: {
        error: -2,
        descripcion: `Ruta ${req.originalUrl} y metodo ${req.method} no implementados`
    }})});


const server = app.listen(port,()=> console.log(`Servidor escuchando en el puerto ${server.address().port}`))
server.on('error',error=> console.log(`Error en el servidor ${error}`)) 
