// console.log("Starting Recursion");

// let number = 5;

// function decrementNums(number) {
//     if(number === 0) return;
//     console.log(number);
//     decrementNums(number - 1);
// }

// const numbers = (number) => {
//     console.log(number);
// }

// numbers(number);

// let l1 = [2,4,3], l2 = [5,6,4];

// function ListNode(val, next){
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }

// const addTwoNumbers = function(l1, l2) {
//     let dummyhead = new ListNode(0);
//     let current = dummyhead;
//     let carry = 0;

//     while(l1 || l2){
//         let x = l1 ? l1.val : 0;
//         let y = l2 ? l2.val : 0;
//         let sum = x + y +carry;
//         carry = Math.floor(sum/10);
        
//     }

// };

// addTwoNumbers(l1,l2);

let s = "anagram", t="nagaram";

var anagram = function(s,t){
    console.log(s,t);
    if(s.length !== t.length){
        return false;
    }
    const charCountS = Array(26).fill(0);
    const charCountT = Array(26).fill(0);

    for(const char of s){
        console.log(charCountS[char]);
        charCountS[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    console.log(charCountS);
}

anagram(s,t);