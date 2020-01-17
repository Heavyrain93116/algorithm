var removeDuplicates = function(nums) {
    for( var i = 0; i < nums.length; i++ ){
        for( var j = i+1; j < nums.length; j++){
            if ( nums[i] === nums[j] ){
                 nums.splice(j,1);
                 j--;    
            }    
        }
    }
    return nums.length;
};

//removeDuplicates([0,0,0,1,2,2,3,4,4,4,5,6]) = 7
//removeDuplicates([0,0,0]) = 1