/*4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]
a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
 */


let arregloD3 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];

//cambia "%" por "?"
console.log(arregloD3);
console.log(arregloD3[1][1]="?");
console.log(arregloD3);

//cambia "-8" por "9"
console.log(arregloD3);
console.log(arregloD3[3][1]=9);
console.log(arregloD3);

//cambia "50" por "¡"
console.log(arregloD3);
console.log(arregloD3[0][0]="¡");
console.log(arregloD3);

//elimina "$"
console.log(arregloD3);
arregloD3[1].splice(2,1);
console.log(arregloD3);

//elimina -2
console.log(arregloD3);
arregloD3[3].splice(2,1);
console.log(arregloD3);






