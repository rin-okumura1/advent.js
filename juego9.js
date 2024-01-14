function adjustLights(lights) {
    // Code here
    let cuenta=0
    if(lights.length>0){ 
    let charPar=lights[0]=='🟢'?'🟢':'🔴'
    let charImpar=charPar=='🟢'?'🔴':'🟢';
    
    for(let i =0;i<lights.length;i++){
      if(i%2==0&&charPar==lights[i]){
  
      }
      else if(i%2!=0&&charImpar==lights[i]){
  
      }
      else {
        cuenta++
      }
    }
    }
    return cuenta
  }