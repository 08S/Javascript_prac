// const MAX_PRIME = 1000;

// function isPrime(n){
//     for(let i=0; i<Math.sqrt(n); i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return n > 1;
// }

// const random = (max) => Math.floor(Math.random() * max);
// console.log(random(MAX_PRIME))

// const generatePrimes = function(quota) {
//     const primes = [];
//     while(primes.length < quota){
//         const candidate = random(MAX_PRIME);
//         if(isPrime(candidate)){
//             primes.push(candidate);
//         }
//     }
//     return primes;
// }


// const quota = document.querySelectorAll("#quota");
// const output = document.querySelectorAll(".output");

// document.querySelector("#generate").addEventListener("click", () => {
//     const primes = generatePrimes(quota.value);
//     output.textContent = `Finished generating ${quota.value} primes!`
// })

// document.querySelector("#reload").addEventListener("click", () => {
//     document.location.reload();
// })

async function generatePromise(){
    console.log("generating promises...");
}

// console.log(generatePromise());


let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is contructed

    // after 1 second signal that the job is done with the resultore
// ￼Activate to view larger image,

});

// console.log(promise);

// IIFE (immediately invoked function expression)

function scope(){
    const arr = [];
    scopeTwo();
    function scopeTwo(){
        scopeThree();
        let primes = "generatative promises";
        arr.push(primes);
        console.log("Scope Two");
    }
    function scopeThree(){
        arr.push("number", "two");
    }
    console.log(arr);
}

// scope();

const myObject = {
    city: "Banglore",
    greet(){
        console.log("Hello world!")
    }
}

console.log(myObject.__proto__);