// let nums1 = [1,2,3,0,0,0], nums2 = [2,5,6];
// let m = 3, n = 3;

// function merge(nums1, m, nums2, n) {
//     let first = m-1;
//     let second = n-1;
//     for(let i=m+n-1; i>=0; i--){
//         if(second < 0){
//             break;
//         }
//         if(nums1[first] > nums2[second]){
//             nums1[i] = nums1[first];
//             first--;
//         }else{
//             nums1[i] = nums2[second];
//             second--;
//         }
//     }
// };

// console.log(merge(nums1, m, nums2, n));

// Que:- Remove duplicates from sorted array
// let nums = [1,1,2];
// // output = 2, nums = [1,2,_];

// let removeDuplicates = function(nums){
//     let i = 0;
//     while(i < nums.length-1){
//         let j = i+1;
//         console.log(j);
//         if(nums[i] === nums[j]){
//             nums.splice(j,1);
//         }else{
//             i++;
//         }
//     }
// }

// removeDuplicates(nums);

// let arr = [1,3,4,5,6];

// arr.splice(1,0, 2);
// console.log(arr);

// Que :- Jump game
// let nums = [2,3,1,1,4]
// let canJump = function(nums){
//     let maxReach = 0;
//     for(let i=0; i<nums.length; i++){
//         // console.log(i, nums[i]);
//         // if the current index is beyond the maximum reachable index, return false
//         // console.log(i, nums[i]);
//         if(i > maxReach){
//             console.log(i, nums[i]);
//             return false;
            
//         }
//         console.log(maxReach, i + nums[i]);
//         // update the maximum reachable index
//         maxReach = Math.max(maxReach, i+nums[i]);

//         // if the maximum reachable index is greater than or equal to the last index, return true
//         if(maxReach >= nums.length-1){
//             console.log(`${maxReach} time jump the last`)
//             return true;

//         }
//     }
//     return false; // cannot reach the last index
// }

// canJump(nums);

// jump game 2

var jumpGame2 = function(){
    const n = nums.length;
    let jump = 0;
    let currentEnd = 0;
    let farthest = 0;
    for(let i=0; i<n-1; i++){
        farthest = Math.max(farthest, i+nums[i]);
        if(i===currentEnd){
            jump++;
            currentEnd = farthest;

            // if the currentEnd reaches or exceeds the last index, no need to check further
            if(currentEnd >= n-1){
                break;
            }
        }
    }
    return jump;
}

// jumpGame2(nums);

let nums = [1,1,2];

let removeDuplicates = function(nums){
    if(nums.length === 0){
        return 0;
    }

    let i = 0; //1
    for(let j=1; j<nums.length; j++){
        if(nums[j] !== nums[i]){
            i++; //1
            nums[i] = nums[j]
        }
    }
    return i + 1; //1
};

removeDuplicates(nums);