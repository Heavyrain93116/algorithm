var countAndSay = function(n) {
    if ( n === 1)
        return "1";
    var str = countAndSay( n-1 );
    var result = "", countNum = 0, temp = str[0];
    for( var i = 0; i < str.length; i++){
        if( str[i] === temp )
            countNum++;
        else{
            result += countNum.toString() + temp;
            temp = str[i];
            countNum = 1;
        }
    }
    result += countNum.toString() + temp;
    return result;
};

// countAndSay(1) = "1"
// countAndSay(2) = "11"
// countAndSay(3) = "21"
// countAndSay(4) = "1211"
// countAndSay(5) = "111221"
// countAndSay(6) = "312211"
// countAndSay(20) = "11131221131211132221232112111312111213111213211231132132211211131221131211221321123113213221123113112221131112311332211211131221131211132211121312211231131112311211232221121321132132211331121321231231121113112221121321133112132112312321123113112221121113122113121113123112112322111213211322211312113211"