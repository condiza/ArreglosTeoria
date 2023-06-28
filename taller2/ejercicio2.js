/*2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55,
66, 77], [1, 2, 3, 4] ] ]
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach */


let arreglomixto = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ];


    for (let i = 0; i< arreglomixto.length; i++) {
            for (let j = 0; j < arreglomixto[i].length; j++) {
                console.log(arreglomixto[i][j])
        
    }
    }

    let arreglo = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
        66, 77], [1, 2, 3, 4] ] ];

        arreglo.forEach(i=>{
            i.forEach(j=>{
                console.log(j)
            })
        })