var longestCommonPrefix = function(strs) {
    var str = "";
    
    if(!strs.length)
        return str;
    
    if ( ( strs.length === 1) || ( strs[0] === "") ) 
	    return strs[0];
    
    for ( var i = 0; i <= strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if ( ( i === strs[j].length ) || (strs[j][i] !== strs[0][i]) ) {
                return strs[0].slice(0,i);
            }
        }
	}
   
};
// longestCommonPrefix(["a","a"]) = "a"
// longestCommonPrefix(["","a"]) = ""
// longestCommonPrefix(["",""]) = ""
// longestCommonPrefix(["aasdf","aasdfasdfasdf","aasf"]) = "aas"