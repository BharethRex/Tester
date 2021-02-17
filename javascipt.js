var price2 = 88.99;

function compute(price){
    let price1 = 149.99;
    return price + price1;
}

//console.log(price1) //error
console.log(compute(price2));



const price3 = 40;
// let price3 = 55.99; //error
// price3 = 55.99; //error
console.log(price3);



var a = "6"
var b = 6
console.log("a == b is "); 
console.log(a == b);
console.log(a === b);



var message = "no";
function foo2(message) {
  message = "yes";
}
foo2( message );
console.log( message );



let count = 5;
let number = 0;
while (count) {
  console.log(count);
  number ++;
  count--;
}

console.log("number of loop is " + number);



let foo = { 
        alpha: 1, 
        beta: 2 
    }; 
    let arrItem = []
    for (let i=0; i <= 5; i++) {   if(i % 2 == 0){
            if(i == 0){
                console.log(typeof(i + foo.beta.toString()));
             }
             arrItem.splice(2,0,i + foo.beta.toString())// add item to arrItem, fill in your codes
        } } 
    console.log(arrItem)//print the arrItem, fill in your codes
    
