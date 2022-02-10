const express = require('express')
const { Router } = express
const router = Router()
const repository = require('../Persistencia/CarritoRepository.js')
const dao = new repository()
const error = 'carrito no encontrado' 




router.get('/:id/carritos',(req,res)=>{
   let idcarrito = req.params.id
   let carrito = dao.getCarritoById(idcarrito)
   if(!carrito){
       res.send({error})
   } else{
       res.send({carrito})
   }  
      
   
})


router.post('/',(req,res)=>{
    let carritoNuevo = req.body//.carrito
    console.log(carritoNuevo)
    let carritoCreado = dao.saveCarrito(carritoNuevo)
    res.send({carritoCreado}) 
})

router.post('/:id/carritos',(req,res)=>{
    let carritoNuevo = req.body//.carrito
    console.log(carritoNuevo)
    let carritoCreado = dao.saveCarrito(carritoNuevo)
    res.send({carritoCreado}) 
})


router.put('/:id',(req,res)=>{
   let idcarrito = req.params.id    
   let carritoEdicion = req.body

   let carritoEditado = dao.editarCarrito(carritoEdicion,idcarrito)
   if(!carritoEditado){
       res.send({error})
   }else{
       res.send({carritoEditado})
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

router.delete('/:id/carritos/:id_prod',(req,res)=>{
    let idCarrito = req.params.id
    let idProducto = req.params.id_prod
    let carrito = dao.getCarritoById(idCarrito)
    if(!carrito){
        res.send({error})
    }else{
        carrito.EliminarProducto(idProducto)       
        res.send({"producto Eliminado Id : ": idProducto})
    }
    
 })
 

module.exports = router