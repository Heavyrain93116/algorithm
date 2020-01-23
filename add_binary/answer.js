var addBinary = function(a, b) {
    if(a==null || a.length==0)
        return b;
    if(b==null || b.length==0)
        return a;

    var pa = a.length-1;
    var pb = b.length-1;

    var flag = 0;
    var sb = '';
    while(pa >= 0 || pb >=0){
        var va = 0;
        var vb = 0;

        if(pa >= 0){
            va = a.charAt(pa)=='0'? 0 : 1;    
            pa--;
        }
        if(pb >= 0){
            vb = b.charAt(pb)=='0'? 0: 1;
            pb--;
        }

        var sum = va + vb + flag;
        if(sum >= 2){
            sb += (sum-2);
            flag = 1;
        } else {
            flag = 0;
            sb += (sum);
        }
    }

    if(flag == 1){
        sb += "1";
    }

    var reversed = sb.split('').reverse().join('');
    return reversed;
};

// addBinary("11","10") = "101"
// addBinary("10101","111001") = "1001110"