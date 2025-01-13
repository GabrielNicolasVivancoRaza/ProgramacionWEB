class Inventario{
    constructor(){
        this.productos = [];
    }

    agregarProductos(nombre, precio, cantidad, categoria) {
        const productoExistente = this.productos.find(p => p.nombre === nombre);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            this.productos.push({ nombre, precio, cantidad, categoria });
            console.log(`Se agrego ${cantidad} ${nombre} a $${precio} cada unidad. Categoria: ${categoria}`);
        }
    }

    listarProductos(forma) {
        if (forma === "ascendente") {
            const ascendente = [...this.productos].sort((a, b) => a.precio - b.precio);
            console.log(ascendente);
            return ascendente;
        } else if (forma === "descendente") {
            const descendente = [...this.productos].sort((a, b) => b.precio - a.precio);
            console.log(descendente);
            return descendente;
        } else {
            console.log("Use 'ascendente' o 'descendente'");
        }
    }

    filtrarProductos(categoria) {
        const filtrados = this.productos.filter(p => p.categoria === categoria);
        console.log(filtrados);
        return filtrados;
    }
}

class Venta{
    constructor(inventario) {
        this.inventario = inventario;
        this.ventasRealizadas = [];
        this.ingresosTotales = 0;
    }

    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos.find(p => p.nombre === nombreProducto);
        if (!producto) {
            console.log(`El producto "${nombreProducto}" no fue encontrado.`);
            return;
        }
        if (cantidad > producto.cantidad) {
            console.log(`No hay suficientes unidades del producto "${nombreProducto}". Solo hay disponible: ${producto.cantidad}`);
            return;
        }

        producto.cantidad -= cantidad;
        const total = cantidad * producto.precio;

        const fechaHora = new Date();
        this.ventasRealizadas.push({ producto: nombreProducto, cantidad, total, fechaHora });
        this.ingresosTotales += total;

        console.log(`Venta realizada: ${cantidad} unidad de "${nombreProducto}" por $${total}.`);
    }

    aplicarDescuento(categoria, porcentaje){
        if(porcentaje<0){
            console.log('El descuento no puede ser negativo');
            return;
        }
    
        if(porcentaje>100){
            console.log('El descuento no puede ser mayor de 100');
            return;
        }
        this.inventario.productos.forEach(producto => {
            if (producto.categoria === categoria) {
                producto.precio *= (1 - porcentaje / 100);
            }
        });
        console.log(`Descuento del ${porcentaje}% aplicado a la categoria: ${categoria}`);
    }
}

const inventario = new Inventario();
inventario.agregarProductos("Camisas", 75, 20, "Ropa");
inventario.agregarProductos("Celulares", 420, 10, "Tecnologia");
inventario.agregarProductos("Pantalones", 100, 15, "Ropa");
inventario.agregarProductos("Computadoras", 650, 40, "Tecnologia");


inventario.listarProductos("ascendente");
inventario.filtrarProductos("Tecnologia");

const ventas = new Venta(inventario);
ventas.realizarVenta("Camisas", 5);
ventas.realizarVenta("Computadoras", 41)
ventas.realizarVenta("Computadoras", 38)

ventas.aplicarDescuento("Ropa", 10);
ventas.aplicarDescuento("Tecnologia", 120);

console.log("Inventario final:", inventario.productos);
console.log("Ventas realizadas:", ventas.ventasRealizadas);
