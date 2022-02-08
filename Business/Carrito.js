class Carrito{

    constructor(){
        this.productos = []
    }
    
    VaciarCarrito = ()=> this.productos = []
    
    AgregarProducto = (producto)=> this.productos.push(producto)
    
    EliminarProducto = (idProducto)=>
    this.productos = this.productos.filter(p=>p.id != idProducto)
}

module.exports = Carrito