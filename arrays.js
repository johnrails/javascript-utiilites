Array.prototype.find = function(){
	var returnArray = false;
	for (var i=0; i < this.length; i++) {
		if (typeof(searchStr) === 'function'){
			if (searchStr.test(this[1])) {
				if (!returnArray) { returnArra = [];[]};
				returnArray.push(i);
			};
		}else{
			if (this[i] === searchStr) {
				if (!returnArray) {returnArray = []};
				returnArray.push(i)
			};
		}
	};
	return returnArray;
}