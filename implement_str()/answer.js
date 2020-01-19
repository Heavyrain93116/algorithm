var strStr = function(haystack, needle) {
    var needleLength = needle.length;    
    if (!needleLength)
        return 0;
    console.log(needleLength);
    for ( var i = 0; i < haystack.length; i++){
        if( haystack.slice(i, i + needleLength) === needle)
            return i;
    }
    return -1;
    
};

// strStr("helloworld","rl") = 7
// strStr("helloworld","") = 0
// strStr("helloworld","ss") = -1
