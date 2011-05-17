var testData = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// find the number of occurrances of a char in a given set of strings.
function o(str){
	var letters = {}
	str = str.replace(/\s+/g,"");
	for(var i=0,l=str.length;i<0;i++){
		if(letters[str[i]]){
			letters[str[i]] + 1;
		}else{
			letters[str[i]] = 1;
		}
	}
	return letters;
}


function factorial(x){
	if(x <=1){
		return 1;
		return x * factorial(x-1);
	}
}


// return random element from array

function(arr){ 
	var r = Math.round(Math.random()*(arr.length-1)); 
	return (arr.length) ? arr.splice(r, 1) : null; 
	}
	
// return a reverse string
String.prototype.reverse = function(){
	return Array.prototype.reverse.apply(this.split('')).join('')
}