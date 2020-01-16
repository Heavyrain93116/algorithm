var isValid = function(s) {
    if (s.length === 0 )
        return true;
    var stack = [];
    for ( var i = 0; i < s.length; i++ ){
        if ( s[i] === "(" )
            stack.push(")");
        else if ( s[i] === "[")
            stack.push("]");
        else if ( s[i] === "{")
            stack.push("}");
        else if ( stack.length === 0 )
            return false;
        else if ( s[i] !== stack.pop() )
            return false;
    }
    if ( stack.length === 0 )
        return true;
    else 
        return false;
};

// isValid("(({}[{]})") - false
// isValid("()({[]})") - true