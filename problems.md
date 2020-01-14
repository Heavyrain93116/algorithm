# 1/14/2020

### Problem 1
  > Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  > You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
  > Given nums = [2, 7, 11, 15], target = 9
  
### Answer 1

    var twoSum = function(nums, target) {
    loop1:
      for(let i = 0; i < nums.length; i++ )
      {
    loop2:
        for(let j = i + 1; j < nums.length; j++ )
        {
          if( (nums[i] + nums[j]) == target )
          {
            return [ i, j ];
            break loop1;
          }
        }
      }
    };

### Problem 2

  > Given a 32-bit signed integer, reverse digits of an integer.

### Answer 2

    var reverse = function(x) {
        var result = str = '';
        if ( x < 0 )
        {
          result += '-';
          x = Number(x.toString().slice(1));
        }
        str = x.toString();
        if ( str.charAt(str.length) !== '0'){
          for ( let i = str.length; i >= 0; i-- )
            result += str.charAt(i);
        } else {
          for ( let i = str.length-1; i >= 0; i-- )
            result += str.charAt(i);
        }
        return Number(result); 
    };

