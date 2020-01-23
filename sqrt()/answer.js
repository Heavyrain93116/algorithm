var mySqrt = function(x) {
    var result = 0;
    while(result*result <= x){
        result++;
    }
    return result - 1;
};

// mySqrt(4) = 2
// mySqrt(9) = 3