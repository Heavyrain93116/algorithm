

function palindrome(x,y,res) {
	
	if ( (x < 0) || ( x % 10 === 0 ))
		return false;
	
	if (x < 10) {
		res.push(x);
		var result = 0;
		for( let i = 0; i < res.length; i++ ){
			result += res[i]*Math.pow(10,res.length-i-1);
		}
		var isTrue = (result === y)? true: false;
		return isTrue;
	}
	else{
		res.push(x%10);
		palindrome(Math.floor(x/10),y,res);
	}
}

palindrome(1233230,1233230,[]);
palindrome(-12321,-12321,[]);
palindrome(-12345,-12345,[]);
palindrome(110,110,[]);
