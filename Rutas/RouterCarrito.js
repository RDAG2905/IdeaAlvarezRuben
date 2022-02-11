const express = require('express')
const Carrito = require('../Business/Carrito.js')
const { Router } = express
const router = Router()
const repository = require('../Persistencia/CarritoRepository.js')
const productosRepo = require('../Persistencia/Repository')
const dao = new repository()
const error = 'carrito no encontrado' 
const errorProducto = 'producto no encontrado' 

router.get('/:id/productos',(req,res)=>{
   let idcarrito = req.params.id
   let carrito = dao.getCarritoById(idcarrito)
   if(!carrito){
       res.send({error})
   } else{
       let productos = carrito.productos
       res.send({productos})
   }  
      
   
})


router.post('/',(req,res)=>{   
    let carritoCreadoId = dao.saveCarrito(new Carrito())
    res.send({carritoCreadoId}) 
})


router.post('/:id/productos',(req,res)=>{
    let idProductoNuevo = req.body.id
    let idCarrito = req.params.id
    console.log(`idProductoNuevo: ${idProductoNuevo}`)
    console.log(`carritoId: ${idCarrito}`)
    let repoProductos = new productosRepo()
    let productoNuevo = repoProductos.getProductById(idProductoNuevo)
    
        if(!productoNuevo){
            res.send({errorProducto})
        }else{            
            let productoAgregado = dao.AgregarProductoAlCarrito(idCarrito,productoNuevo)
            res.send({productoAgregado}) 
        }
    
})





router.delete('/:id',(req,res)=>{
   let id = req.params.id
   let carrito = dao.eliminarCarrito(id)
   if(!carrito){
       res.send({error})
   }else{       
       res.send({"carrito Eliminado ": carrito})
   }
   
})

router.delete('/:id/productos/:id_prod',(req,res)=>{
    let idCarrito = req.params.id
    let idProducto = req.params.id_prod
    let carrito = dao.getCarritoById(idCarrito)
    if(!carrito){
        res.send({error})
    }else{
        //no funciona el método del carrito
        //carrito.EliminarProducto(idProducto)  
        carrito.productos = carrito.productos.filter(p=>p.id != idProducto)
        res.send({"producto Eliminado Id : ": idProducto})
    }
    
 })
 

module.exports = router