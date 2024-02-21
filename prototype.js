// const obj = {
//     naam: "Shubham",
//     greet() {
//         console.log(`Good Morning ${this.naam}`);
//     }
// }

// // obj.greet();
// let protoObj = Object.getPrototypeOf(obj);
// console.log(protoObj);

// let obj1 = {};
// let setProto = Object.setPrototypeOf(obj, obj1);
// console.log(setProto);
// console.log(obj1.naam);


let arr = [10,5,20,8];
// ouput = 2;

function findHighestOccurence(arr){
    let maxCount = 0;
    let max_frequency;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            // max_frequency = arr[i];
        }
    }
    console.log(maxCount);
}

// findHighestOccurence(arr);

let arr1 = [5,20,40,10];

// i = 0 flag = false 
// i = 1: flag = false; 
// i = 2: flag = true 

function findMax(arr){
    for(let i=0; i < arr.length; i++){
        let flag = true;
        for(let j=0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                flag = false;
                break;
            }
        }
        if(flag === true){
            console.log(i);
        }
    }
    return -1;
}

// findMax(arr1);

function isSorted(arr){
    for(let i=0; i< arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false;
        }
    }
    return true;
}

// isSorted(arr1);

let arr2 = [10,5,7,30];

// need to reverse this array 
function reversed(arr2){
    let reversed_arr = [];
    for(let i=arr2.length-1; i>=0; i--){
        reversed_arr.push(arr2[i]);
    }
    console.log(reversed_arr);
}

reversed(arr2);

let arr_reverse = [];

// arr2.forEach((element) => {
//     arr_reverse.unshift(element);
// })

// console.log(arr_reverse);

// arr_reverse = arr2.map((item, idx) => arr2[arr2.length-1 - idx]);

// console.log(arr_reverse);

// function reverseArr(arr2){
//     let low = 0;
//     let high = arr2.length -1;
//     while(low < high){
//         [arr[low], arr[high]] = [arr[high], arr[low]]
//         low++;
//         high--;
//     }
// }

// console.log(reverseArr());

// move all zeros to end in javascript 
let zerosArr = [8,0,5,0,0,7];

// function allZerosArr(zerosArr){
//     for(let i=0; i<zerosArr.length; i++){
//         if(zerosArr[i] === 0){
//             for(let j=i+1; j<zerosArr.length; j++){
//                 if(zerosArr[j] !== 0){
//                     [arr[i], arr[j]] = [arr[j],arr[i]]
//                     break;
//                 }
//             }
//         }
//     }
// }

// allZerosArr(zerosArr);

// linear time complexity solution
// function moveZeros(arr){
//     let count = 0;
//     for(let i=0; i<arr.length; i++){
//         if(zerosArr[i] !== 0){
//             [arr[i],arr[count]] = [arr[count], arr[i]]
//             count++;
//         }
//     }
// }

// moveZeros(zerosArr);

// left rotate by one solutions 
let leftarr = [1,2,3,4,5];
// output = [2,3,4,5,1]

function leftRotate(arr){
    let x = arr[0];
    for(let i=1; i<arr.length; i++){
        arr[i-1] = arr[i];
        arr[arr.length-1] = x;
    }
    console.log(arr);
}

// leftRotate(leftarr);

const arr5 = [1,2,3,4,5];

const [firstnum, secondnum, thirdnum, ...rest] = arr5;

const originalArray = [1,2,3,4,5];

const newArray = [...originalArray, ...rest];
console.log(newArray);

// memoization function
// const memoizedFibonacci = (function (){
//     const cache = [];

//     return function fib(n) {
//         if(n in cache) return cache[n];
//         if(n <= 1) return n;

//         cache[n] = fib(n-1) + fib(n-2);
//         return cache[n];
//     }
// })();

function mergedString(word1, word2){
    let merged = "";
    let maxLength = Math.max(word1.length, word2.length);
    console.log(maxLength, "maxLength")

    for(let i=0; i<maxLength; i++){
        if(i < word1.length){
            merged += word1[i];
        }
        if(i < word2.length){
            merged += word2[i];
        }
    }
    console.log(merged)
}

// mergedString("abc", "defgh");

function largestCommonDivisiorString(str1, str2){
    let largestDivisor = '';
    const len1 = str1.length;
    const len2 = str2.length;

    //Iterate over the lengths of substrings
    for(let i=1; i<=Math.min(len1, len2); i++){
        //check if the substring of length i divides both str1 and str2
        if(len1 % i === 0 && len2 % i === 0){
            const substring = str1.substring(0,i);
            if(str1 === substring.repeat(len1 / i) && str2 === substring.repeat(len2/i)){
                largestDivisor = substring
            }
        }
    }
    console.log(largestDivisor)
}

// largestCommonDivisiorString("ABCABC", "ABC");

function makeSizer(size) {
    return function () {
        document.body.style.fontSize = `${size}px`;
    };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
const size24 = makeSizer(24);
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
document.getElementById("size-24").onclick = size24;

let a = [1,2,3,4,5]; // initialize a variable to refer to an array
let b = a; //copy that reference into a new valriable
b[0] = 99; //Modify the array using the original reference

console.log(a, "a assigned array")
console.log(b, "b is the reference of a"); // display the change array [99,2,3,4,5] using the new reference.
