function organizeGifts(gifts) {
  const countGifts = gifts.match(/\d+/g)
  const nameGifts = gifts.match(/[^0-9]/g)

  let response = ""
  let i = 0

  for (let i =0;i<countGifts.length;i++) {
    const g = nameGifts[i]
    
    while(countGifts[i]>0){
      if(countGifts[i]>=50){
        response+="["+nameGifts[i]+"]"
        countGifts[i]-=50
      }
      else if(countGifts[i]>=10){
        response+="{"+nameGifts[i]+"}"
        countGifts[i]-=10
      }
      else{
        response+="("+nameGifts[i].repeat(countGifts[i])+")"
        countGifts[i]=countGifts[i]-countGifts[i]
      }

    }
    
  }

  return response
}
