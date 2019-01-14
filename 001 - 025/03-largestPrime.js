// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let primeArray = [];
let primeArray2 = [];

for(let x = 13195; x > 0; x-=2){

    let y = 13195;
    let z = 0;

    switch (true){
        case y % x == 0:
            z = y/x;
            primeArray.push(z);
}}

primeArray = primeArray.reverse();

primeArray.forEach(function(value, index){
    for (j = 2; j < value; j++){
        switch (true){
            case (value % j == 0):
            console.log(value);
            primeArray2.push(value);
            break;
       
    }  
        
} 

})      

console.log(primeArray);