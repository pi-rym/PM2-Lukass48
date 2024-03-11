class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        return total - (total * (porcentaje / 100));
    }

    alertaSiVacio() {
        if (this.productos.length === 0) {
            throw new Error('El carrito de compras está vacío.');
        }
    }
}

module.exports = CarritoCompra;
