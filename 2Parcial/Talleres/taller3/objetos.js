class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        
    }
};

const inventario = {
    producto1: new Producto("Zapatos", 70, 20),
    producto2: new Producto("Camisas", 90, 12),
    producto3: new Producto("Gorras", 25, 50),
    producto4: new Producto("Guantes", 150, 10)
};

Object.seal(inventario);

function venderProducto(nombre,cantidad) {
    const producto = Object.values(inventario).find(p => p.nombre === nombre);
    
    if (!producto) {
        console.log(`El producto ${nombre} no existe en el inventario o esta mal escrito`);
        return;
    }

    if (producto.cantidad>=cantidad){
        producto.cantidad-=cantidad;
        let total = producto.precio*cantidad; 

        console.log(`El producto ${nombre} se vendio ${cantidad} unidades, en un total de ${total}`);
    } else{
        console.log(`No tenemos ${cantidad} del producto ${nombre}`);
    }
}

function aplicarDescuento(descuento) {
    if(descuento<0){
        console.log('El descuento no puede ser negativo');
        return;
    }

    if(descuento>100){
        console.log('El descuento no puede ser mayor de 100');
        return;
    }

    Object.values(inventario).forEach(producto => {
        producto.precio *= (1 - descuento / 100);
    });
    
    console.log(`Descuento del ${descuento}% aplicado a todos los productos.`);   
}

venderProducto('Zapatos', 2);
venderProducto('Zapatos', 19);
venderProducto('Cobijas', 50);
venderProducto('Guantes', 100);
//aplicarDescuento(120);
//aplicarDescuento(-120);
aplicarDescuento(10);

console.log("Inventario final:", inventario);

