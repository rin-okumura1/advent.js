

function findFirstRepeated(gifts) {
    var crearObjeto=function (array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
        a.push({
            i,
            v: array[i]
        })

    }
    return a
}
    
    
    
    var e = []
    let a = (crearObjeto(gifts))
    for (let i = 0; i < gifts.length; i++) {
        e.push(a.find((a) => a.v === gifts[i] && a.i > i))

    }



    e = e.sort((a, e) => a.i - e.i)
    if (e[0] != undefined) {
        return e[0].v
    } else {
        return -1
    }
}




var as = [5, 1, 5, 1]

console.log(findFirstRepeated(as))