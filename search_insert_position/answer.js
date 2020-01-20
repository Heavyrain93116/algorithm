var searchInsert = function(nums, target) {
    if ( target === 0 )
        return 0;
    var biggerCase = 0;
    for ( var i = 0; i < nums.length; i++ ){
        if ( nums[i] === target )
            return i;
        else if ( nums[i] > target )
            return i;
        else biggerCase++;
    }
    return biggerCase;
};

// searchInsert([1,2,3,4,5],0) = 0
// searchInsert([1,2,4,8,12],4) = 2
// searchInsert([1,2,3,4,5],12) = 5
