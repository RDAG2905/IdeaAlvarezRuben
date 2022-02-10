
const productosRepo = require('./Repository')
class CarritoRepository{
    
    constructor(){
        this.primerId = 1  
        this.Carritos = []
        this.mensajeOk = 'El producto se agregó al carrito'  
        this.mensajeError = 'Producto inexistente'               
    }
   
   
    getCarritos = ()=> this.carritos
     
    getCarritoById(idCarrito){
        let Carrito = this.Carritos.find(pr => pr.id == idCarrito) 
        return Carrito   
    }

    getProductsByCarritoId(idCarrito){
        let Carrito = this.Carritos.find(pr => pr.id == idCarrito) 
        return Carrito.GetProducts   
    }

    saveCarrito(Carrito){
        if (this.Carritos.length == 0){
            Carrito.id = primerId
         }else{
             let ids = this.Carritos.map(p=>p.id)            
             let maxId = Math.max(...ids)
             Carrito.id = maxId + 1
         }
         this.Carritos.push(Carrito)
         console.log(Carrito) 
         return Carrito.id
    }

    AgregarProductoAlCarrito(idCarrito,idProducto){
        const repoProductos = new productosRepo()
        let producto = repoProductos.getProductById(idProducto)
        if(producto){
            let carrito = this.Carritos.find(pr => pr.id == idCarrito) 
            carrito. AgregarProducto(producto)
            return {
                producto,
                mensajeOk :this.mensajeOk
            }
        }
           
        return {
            producto,
            mensajeOk :this.mensajeError
        }   
    }

   


    eliminarCarrito(id){
        let carrito = this.Carritos.find( pr => pr.id == id)
        if(!carrito){
            return null
        }else{
            carrito.Vaciar()
            this.Carritos = this.Carritos.filter(prd => prd.id != id)
            return carrito
        }
        
    }

}

module.exports = CarritoRepository