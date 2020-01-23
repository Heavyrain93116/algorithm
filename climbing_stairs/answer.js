var climbStairs = function(n) {
    if(n == 1 || n === 0) {
        return 1;
    }
    let count = 0;
    count = climbStairs(n - 1) + climbStairs(n - 2);
    return count;
}

// climbStairs(6) = 13