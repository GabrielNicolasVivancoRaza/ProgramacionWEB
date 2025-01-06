
function calcularPromedio(nota1, nota2, nota3) {
    if (typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number') {
        console.error('Los parametros deben ser numeros.');
        return;
    }
    let promedio = (nota1+nota2+nota3)/3;
    console.log('El promedio es: '+ promedio);
}
calcularPromedio(10, 9, 8);

function determinarMayor(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.error('Los parametros deben ser numeros.');
        return;
    }
    if(num1>num2){
        console.log(num1 + ' es mayor que ' + num2)
    } else if (num1<num2){
        console.log(num2 + ' es mayor que ' + num1)
    }else{
        console.log(num1 + ' es igual a ' + num2)
    }
}
determinarMayor(17,19)

const esPar = (parOImpar)=>typeof parOImpar !== 'number' ? 'Error: El parámetro debe ser un número.' : parOImpar % 2 === 0 ? 'True' : 'False';

console.log(esPar(1))

setTimeout(function () {
    calcularPromedio(0, 9, 8);
    determinarMayor(40,21); 
    console.log(esPar(2));
}, 3000)