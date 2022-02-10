const express = require('express')
const { Router } = express
const router = Router()
const repository = require('../Persistencia/Repository.js')
const productosDao = new repository()
const error = 'producto no encontrado' 


router.get('/:id',(req,res)=>{
   let idProducto = req.params.id
   let producto = productosDao.getProductById(idProducto)

   if(!producto){
        let productos = productosDao.getProducts()
        res.send({productos})
    }else{
        res.send({producto})
    
}
   
})


router.post('/',(req,res)=>{
    let productoNuevo = req.body//.producto
    console.log(productoNuevo)
    let productoCreado = productosDao.saveProduct(productoNuevo)
    res.send({productoCreado}) 
})



router.put('/:id',(req,res)=>{
   let idProducto = req.params.id    
   let productoEdicion = req.body

   let productoEditado = productosDao.editarProducto(productoEdicion,idProducto)
   if(!productoEditado){
       res.send({error})
   }else{
       res.send({productoEditado})
   }       
})


router.delete('/:id',(req,res)=>{
   let id = req.params.id
   let producto = productosDao.eliminarProducto(id)
   if(!producto){
       res.send({error})
   }else{       
       res.send({"producto Eliminado ": producto})
   }
   
})

module.exports = router