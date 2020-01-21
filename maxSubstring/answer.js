var maxSubArray = function(nums) {
    var sum = nums[0], result = 0;
    nums.forEach((i,a) => {
       result = Math.max(i, result + i)
        sum = Math.max(sum, result)
    });
    return sum;
};

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) = 6