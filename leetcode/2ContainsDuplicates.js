function containsDuplicate(nums){
    const seen = new Set();
    for(const num of nums ){
        if (seen.has(num)){
            return true;
        }
        seen.add(num);
    }
    return false;
}
//Time;O(n)


// function containsDuplicate(nums) {
//     let duplicate = new Set(nums);
//     //any duplicate values
//     console.log(nums.length);
//     console.log(duplicate);

//     if(nums.length == duplicate.size){
//         return false;
//     }
    
//     return true;
    
// };

// const nums=[1,2,3,5,8];

// console.log("contains duplicate",containsDuplicate(nums));
//Time O(n)


//
// function containsDuplicate(nums){
//     for(let i=0 ;i  < nums.length;i++ ){
//         for(let j=i+1;j< nums.length;j++ ){
//             if (nums[i] === nums[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// const nums=[1,2,3,5,8];
// const nums2=[1,2,3,1];
// const nums3=[1,1,1,3,3,4,3,2,4,2];

//  console.log("contains duplicate",containsDuplicate(nums));
//  console.log("contains duplicate",containsDuplicate(nums2));
//  console.log("contains duplicate",containsDuplicate(nums3));

//  Time Complexity:Object(n^2)
//  space:O(1)
