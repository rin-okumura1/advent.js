function findNaughtyStep(original, modified) {
    let diferente=''
    if(original !=null&&original!= undefined){
      
      let palabraOriginal=[...original]
      let palabraModificada=[...modified]
      let count=0
      
      var quedo=0
      for(let i =0;i<palabraModificada.length;i++){
        if(count==0&&(original.toLowerCase().search(palabraModificada[i])==-1)){
              
          diferente=palabraModificada[i]
          count++
        }
        else if(count==0&&i<original.length&&modified.toLowerCase().search(palabraOriginal[i])==-1){
          diferente=palabraOriginal[i]
          count++
        }
        
        
        
      
      }
      
      
    }
    return diferente.toString()
    }


    console.log(findNaughtyStep("iiii","iiiii"))
    console.log(findNaughtyStep(undefined,null))