let foo3 = { 
        alpha: 1, 
        beta: 2 
    }; 
    let arrItem1 = []
    for (let i=0; i <= 5; i++) {   if(i % 2 == 0){
            if(i == 0){
                console.log(typeof(i + foo3.beta.toString()));
             }
             arrItem1.splice(2,0,i + foo3.beta.toString())// add item to arrItem, fill in your codes
        } } 
    console.log(arrItem1)//print the arrItem, fill in your codes