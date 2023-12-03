function manufacture(gifts, materials) {
    let contador = 0
    let palabra = []
    let retorno=[]
    for (let i = 0; i < gifts.length; i++) {
        palabra = [...gifts[i]]
        for (let k = 0; k < gifts[i].length; k++) {
            if (materials.search(palabra[k]) != -1) {contador++}

        }
        if(palabra.length==contador){
            retorno.push(gifts[i])
        }
        contador=0
    }
    


    return retorno
}


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))