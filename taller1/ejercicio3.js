/*3. Dado el arreglo [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
a) Leer e imprimir el elemento true
b) Leer e imprimir el elemento 1
c) Leer e imprimir el elemento 77
d) Leer e imprimir el elemento 88
e) Leer e imprimir el elemento ¿
 */


let arregloD3 = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ];

//imprime "true"
console.log(arregloD3[1][0][1]);

//imprime "1"
console.log(arregloD3[2][0][0][0][0]);

//imprime "77"
console.log(arregloD3[0][1][1]);

//imprime "88"
console.log(arregloD3[1][1][0][0]);

//imprime "¿"
console.log(arregloD3[3]);
