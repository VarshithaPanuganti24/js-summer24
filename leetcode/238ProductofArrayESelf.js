function productExceptSelf(nums){
    const answer = new Array(nums.length).fill(1);
    

    let left = 1 ;

    for (let i = 0;i < nums.length; i++){
        answer[i] = left;
        left = left * nums[i];
        //console.log("Answer for left",left);
        console.log("Answer startingleft ",answer);
    }

    let right = 1;
    for(let i = nums.length - 1;i >= 0;i--){
        console.log("Answer right starting",answer);
        answer[i] = answer[i]*right;
        console.log("Answer right",answer);
        right= right*nums[i];
        console.log("right",right);

    }
    return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));       // [24, 12, 8, 6]
//console.log(productExceptSelf([-1, 1, 0, -3, 3]));