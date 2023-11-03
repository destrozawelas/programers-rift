
var nombre = prompt("nombre:");

var edad = prompt("edad:");

edad = parseInt(edad);

var añoNacimiento = new Date().getFullYear() - edad;

var mensaje = "Hola " + nombre + ", naciste en" + añoNacimiento;

console.log(mensaje);

alert(mensaje);
