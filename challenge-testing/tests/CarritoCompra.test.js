const CarritoCompra = require("../index");
// carritoCompra.test.js

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    it('agregarProducto deberia agregar un producto al carrito', () => {
        const producto = { nombre: 'Camisa', precio: 20 };
        carrito.agregarProducto(producto);
        expect(carrito.productos).toContain(producto);
    });

    it('calcularTotal deberia devolver el total del valor de todos los productos', () => {
        carrito.agregarProducto({ nombre: 'Camisa', precio: 20 });
        carrito.agregarProducto({ nombre: 'Pantalón', precio: 30 });
        expect(carrito.calcularTotal()).toBe(50);
    });

    it('aplicarDescuento deberia aplicar descuento al total del valor de los productos', () => {
        carrito.agregarProducto({ nombre: 'Camisa', precio: 20 });
        carrito.agregarProducto({ nombre: 'Pantalón', precio: 30 });
        expect(carrito.aplicarDescuento(10)).toBe(45);
    });

    it('alertaSiVacio deberia dar error si el carrito de compras está vacío', () => {
        expect(() => carrito.alertaSiVacio()).toThrow('El carrito de compras está vacío.');
    });
});
