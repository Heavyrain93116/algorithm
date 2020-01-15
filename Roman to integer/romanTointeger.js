
function romanToInt(s) {
    var result = 0;
	s = s.split("");
	for (var i = s.length-1; i >= 0 ; i -- ) {
		switch (s[i]) {
			case "I":
				result += 1;
				s.splice(i,1);
                break;
			case "V":
				if ( s[i-1] === "I")
				{
					result += 4;
					s.splice(i-1,2);
				}
				else
					result += 5;
                    s.splice(i,1);
				break;
			case "X":
			if ( s[i-1] === "I")
				{
					result += 9;
					s.splice(i-1,2);
				}
				else
					result += 10;
                    s.splice(i,1);
				break;
			case "L":
			if ( s[i-1] === "X")
				{
					result += 40;
					s.splice(i-1,2);
				}
				else
                    
					result += 50;
                    s.splice(i,1);
				break;
			case "C":
			if ( s[i-1] === "X")
				{
					result += 90;
					s.splice(i-1,2);
				}
				else
					result += 100;
                    s.splice(i,1);
				break;
			case "D":
			if ( s[i-1] === "C")
				{
					result += 400;
					s.splice(i-1,2);
				}
				else
                    
					result += 500;
                    s.splice(i,1);
				break;
			case "M":
			if ( s[i-1] === "C")
				{
					result += 900;
					s.splice(i-1,2);
				}
				else
                    
					result += 1000;
                    s.splice(i,1);
				break;
            default:
                break;
		}
	}
    return result;
};
romanToInt("MMCDXIV");
romanToInt("MIV");
romanToInt("CMCDXXIV");
romanToInt("MCCIXVIII");
