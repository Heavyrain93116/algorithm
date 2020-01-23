var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1);
                break;
            }
        } else {
            digits[i]++;
            break;
        }
    }
    return digits;
};

// plusOne([1,9,2,1]) = [1,9,2,2]
// plusOne([1,9,9,9]) = [2,0,0,0]