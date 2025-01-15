//sistema de ventas 

//CREACION DE LA CLASE PRODUCTO
class Producto {
    static contadorProductos =0;

    static get PRECIO_MINIMO(){
        return 0;
    } 

    constructor(nombre, precio, categoria){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this.precio = precio;
        this._categoria = categoria;
        this._stock = 3;
        //se crea con _ para despues poder ser utilizado, para buenas practicas
    }

    get idProducto(){
        return this._idProducto; //con _ poruqe estamoas accediendo a la propiedad
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        if (precio >= Producto.PRECIO_MINIMO) {
            this._precio = precio;
        } else {
            console.log("El precio no puede ser negativo.");
        }
    }

    get categoria(){
        return this._categoria;
    }

    set categoria(categoria){
        this._categoria = categoria;
    }

    get stock(){
        return this._stock;
    }

    disminuirStock(){
        if(this._stock>0){
            this._stock--;
        }else{
            console.log("No hay suficiente stock")
        }
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, stock: ${this._stock}, categoria: ${this._categoria}`; //template string, muy util cuando trabaje o modifique valores dentro de un string 
    }


}
/*
//modificador denominado STATIC 
//se usa para acceder directamente a traves de la clase 

//Los metodos o propiedades estaticas (static) no requieren que se creen una instancia de la clase para ser utilizados 

class Calculadora{
    //metodo static
    static sumar(a, b){
        return a+b;
    }
}

//el acceso al metodo estatico directamente de la clase es asi 
console.log(Calculadora.sumar(5,6));

//no se puede acceder desde una instancia 
const calc = new Calculadora();
console.log(calc.sumar(3,5));

//el modificador static en JS es una herramienta clave para definir funciones y propiedades 
//compartidas sin necesidad de crear algun tipo de instancia de una clase. 
*/
/*probando*/




//Creacion clase ORDEN 
class Orden {
    static contadorOrdenes = 0;
    static get DESCUENTO_CATEGORIA(){
        return 10;
    }
    static get MAX_PRODUCTOS(){
        return 5;
    }
    static get IMPUESTOS(){
        return 16;
    }
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregador = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        //verificar si no hemos superado el max de productos existententes
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            if(producto.stock>0){
                this._productos.push(producto);
                producto.disminuirStock();
            }else{
                console.log("No hay stock disponible")
            }
            //otra sintaxis
            //this._productos[this._contadorProductosAgregador++]=producto;
        }else{
            //indica que no se puede agregar mas productos a la orden 
            console.log(`No se puede agregar mas productos a la orden`)
        }
    }
    
    calcularTotal(){
        let totalVenta = 0;
        for (const producto of this._productos) {
            totalVenta += producto._precio; //totalventa = totalventa + producto._precio
        }

        return totalVenta;
    }

    descontarCategoria(categoria) {
        for (const producto of this._productos) {
            if (producto.categoria === categoria) {
                producto._precio *= (1 - Orden.DESCUENTO_CATEGORIA / 100);
            }
        }
    }

    calcularImpuesto() {
        return this.calcularTotal() * (1 + Orden.IMPUESTOS / 100);
    }

    listarProductosDescendente() {
        return [...this._productos].sort((a, b) => b.precio - a.precio);
    }

    mostrarOrden(){
        let productosOrden = "";
        for (const producto of this._productos) {
            //productosOrden += producto.toString()+ " ";
            productosOrden += '\n{' + producto.toString() + '}'; //tenemos varios productos
        }

        console.log(`orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}
 /*Probar*/
let producto1 = new Producto("Laptop", 500, "Electronica");
let producto2 = new Producto("Mouse", 10, "Electronica");

console.log(producto1.toString());
console.log(producto2.toString()); 

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Teclado', 150, "Electronica");
let producto4= new Producto('Vestido', 50, 'Ropa');

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
//orden2.agregarProducto(producto3);
orden2.mostrarOrden();

let orden3 = new Orden();
//orden3.agregarProducto(producto4);
//orden3.agregarProducto(producto4);
//orden3.agregarProducto(producto4);
//orden3.agregarProducto(producto4);
orden3.agregarProducto(producto4)
orden3.descontarCategoria("Ropa")
orden3.mostrarOrden();

//EJERCICIO RETO 
/*
1.- Stock Disminuya 
2.- Descuento por categoria (propiedad en la clase producto)
    crear una nueva propiedad Categoria en la clase producto
    Los productos de las categoria deben tener un descuento del 10% al calcular el total de la venta 
3.- Aplicacion de impuestos
    Implementar un metodo calcularImpuestos() en la clase orden para que agregue un impuesto  16% al total calculado
4.- Listar los productos de forma descendente 
5.- Restriccion adicional  
    aseguremos que los precios no pueden ser negativos al establecerlos en las clase Producto
*/