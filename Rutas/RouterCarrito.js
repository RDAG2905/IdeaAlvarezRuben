const express = require('express')
const { Router } = express
const router = Router()
const repository = require('../Persistencia/Repository.js')
const dao = new repository()
const error = 'producto no encontrado' 




router.get('/:id/productos',(req,res)=>{
   let idProducto = req.params.id
   let producto = dao.getProductById(idProducto)
   if(!producto){
       res.send({error})
   } else{
       res.send({producto})
   }  
      
   
})


router.post('/',(req,res)=>{
    let productoNuevo = req.body//.producto
    console.log(productoNuevo)
    let productoCreado = dao.saveProduct(productoNuevo)
    res.send({productoCreado}) 
})

router.post('/:id/productos',(req,res)=>{
    let productoNuevo = req.body//.producto
    console.log(productoNuevo)
    let productoCreado = dao.saveProduct(productoNuevo)
    res.send({productoCreado}) 
})


router.put('/:id',(req,res)=>{
   let idProducto = req.params.id    
   let productoEdicion = req.body

   let productoEditado = dao.editarProducto(productoEdicion,idProducto)
   if(!productoEditado){
       res.send({error})
   }else{
       res.send({productoEditado})
   }       
})


router.delete('/:id',(req,res)=>{
   let id = req.params.id
   let producto = dao.eliminarProducto(id)
   if(!producto){
       res.send({error})
   }else{       
       res.send({"producto Eliminado ": producto})
   }
   
})

router.delete('/:id/productos/:id_prod',(req,res)=>{
    let id = req.params.id
    let producto = dao.eliminarProducto(id)
    if(!producto){
        res.send({error})
    }else{       
        res.send({"producto Eliminado ": producto})
    }
    
 })
 

module.exports = router