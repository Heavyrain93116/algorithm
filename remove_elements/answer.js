var removeElement = function(nums, val) {
    for ( var i = 0; i < nums.length; i++){
        if ( nums[i] === val ) {
            nums.splice(i,1);
            i--;
        }  
    }
    return nums.length;
};

// removeElement([0,1,2,3,3,2,4,2], 2) = 5