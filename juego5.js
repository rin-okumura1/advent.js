function cyberReindeer(road, time) {
    let array = [...road]
    let retorno = []
    let barreraclose
    let turnos = 0
    let altera=()=>{
      while(array.find((a)=>a=='|')!=-1){array=[...road.replace("|","*")]}
    }
    for (let i = 0; i < time; i++) {
      let prev = array[i]
  
      if (i == 0 && prev == 'S') {
        retorno.push(array.join(""))
  
      }
  
      else if (turnos == 0 && prev == '.') {
        if(array[barreraclose]=='S'){
        array[barreraclose] = "*"  
        }
        else{ array[i-1] = "."}
        
        
        array[i] = "S"
        retorno.push(array.join(""))
      }
      else if (prev == '|') {
        barreraclose = i
        retorno.push(array.join(""))
        turnos++
      }
      else if (array[barreraclose] == '|' && turnos ==2) {
  
          altera()
        array[barreraclose]='S'
        array[barreraclose-1]='.'
        retorno.push(array.join(""))
      }
  
      
      else if (turnos > 0) {
  
        retorno.push(array.join(""))
        turnos++
      }
      else if(prev=='*'){
        barreraclose=0
        array[i-1] = "."
        array[i] = "S"
        retorno.push(array.join(""))
      }
  
  
    }
    return [retorno,turnos]
  }

  const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))