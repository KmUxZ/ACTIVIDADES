let numeros = [];

numeros = [15, 80, 576, 735.344, 299, -43];
document.write('<br>');
document.write('segundo elemento: ', numeros[1]);
document.write('<br>');
document.write('primer elemento: ', numeros[0]);
document.write('<br>');
document.write('tercer elemento: ', numeros[3]);
document.write('<br>');

// Para reemplazar uno de los valores iniciales.
numeros[0] = 98;
document.write('Elementos: ', numeros);
document.write('<br>');
numeros[5] = 178;
document.write('Elementos: ', numeros);
document.write('<br>');

let frutas = ['papaya', 'banana', 'mandarina', 'uvas'];
document.write('<br>');
document.write('frutas: ', frutas);
document.write('<br>');

// METODOS DE LOS ARRAYS
// Ver cantidad de elementos
document.write('cantidad: ', frutas.length);
document.write('<br>');
document.write('cantidad: ', numeros.length);
document.write('<br>');

// saber ultimo elemento
document.write('ultimo elemento: ', numeros[numeros.length-1]);
document.write('<br>');

// Arrays en tipo texto
document.write('en string: ', numeros.toString());
document.write('<br>');

// Unir tipos de Arrays
let letras = ['x', 'y', 'z'];
let numeros1 = [1,2,3,4];
document.write('alfanumerico: ', letras.concat(numeros1));
document.write('<br>');

// borrar ultimo elemento
numeros.pop();
document.write(numeros);
document.write('<br>');

// agregar elemento al final
numeros.push(-90);
document.write(numeros);
document.write('<br>');

// eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

// insertar elemento al inicio
numeros.unshift(1000);
document.write(numeros);
document.write('<br>');