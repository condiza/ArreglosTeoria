/*1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
 */

let arreglomixto=[ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

for (let i = 0; i < arreglomixto.length; i++) {
    for (let j = 0; j < arreglomixto[i].length; j++) {
        console.log(arreglomixto[i][j]);
    }
    
}
// ciclo forEach;

let arreglomixto1=[ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

arreglomixto1.forEach(i=>{
    i.forEach(j=>{
        console.log(j)
    })
})


