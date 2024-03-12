class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
       let total =0;
       for (const item of this.productos){
        total += item.price * item.quantity
       }
       return total
    }

   aplicarDescuento(porcentaje){
    const subtotal = this.calcularTotal()
    const descuento = this.calcularTotal() * (porcentaje / 100)

    return subtotal - descuento

   }
}

module.exports = CarritoCompra;
