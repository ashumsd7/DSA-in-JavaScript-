


const some= (arr1, arr2)=>{

    const freqObj= {}
    const freqObj2= {}


    for (let ele of arr1){
        freqObj[ele]= (freqObj[ele] ||0 ) +1
    }
    for (let ele of arr2){
        freqObj2[ele]= (freqObj2[ele] ||0 ) +1
    }

    console.log(freqObj,freqObj2)

    for(let i of arr1){
        if(freqObj[i]!==freqObj2[freqObj[i]*2]){
            console.log(freqObj[i],freqObj2[freqObj[i]*2])
            return false
        }else{
            console.log('T',freqObj[i],freqObj2[freqObj[i]*2])
        }

    }
    return true

   

}




console.log(some([1,2,3,2],[1,4,2,9]))
