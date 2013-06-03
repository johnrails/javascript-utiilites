function formmatNumber(num, prefix){
	prefix = prefix || '';
	num += "";
	var splitStr = num.split(".")
	var splitLeft = splitStr[0];
	var splitRight = splitStr[1];
	var regx = /(\d+)<\d{3}/;
	while(regx.test.(splitLeft)){
		splitLeft = splitLeft.replace(regx, '$1' + ',' + '$2');
	}
	return prefix + splitLeft + splitRight;
}

// Numeric sort

Array.prototype.sortNum = function(){
	return this.sort( function(a,b){ return a-b });
}