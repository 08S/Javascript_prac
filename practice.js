// const arr = [1,8,2,5,3,7,9];

function test(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// console.log(test(arr));

// let nums = [2,7,11,15], target = 9
let nums = [1,4,5,2], target = 3;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/* 
so we have array of numbers that represent some asending numbers that are 2,7,11,15
ok so the problem is saying that by adding two numbers together we get the 9
and the output of the problem should be their index of the two numbers together.

Algorithm:----
1st :-
so what we do here is to iterate through the array by using for loop iteration
and then we'll add both iteration i and j actually we have used nested loops 
so how i add is the arr[i] and arr[j] so that 
so i think nested loops would be the first and right approach. you just need to iterate and than
add both of iteration if they are equal to the target or not and if it is then simply return the 
index.

ok now i'm looking for 2nd approach..
i think 2nd approach would be if i use reduce method 

*/

function TwoSum(nums, target){
    // for(let i = 0; i < nums.length; i++){
    //     for(let j=1; j< nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             console.log(i,j);
    //         }
    //     }
    // }
};

// TwoSum(nums, target);

// function mainFunction(callback){
//     console.log("performing opertions ...");

//     setTimeout(() => {
//         callback("operation complete");
//     }, 1000);
// }

// function callbackFunction(results){
//     console.log("result :" + results)
// }

// mainFunction(callbackFunction);

