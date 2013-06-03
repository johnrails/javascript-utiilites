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

// object or array

function isArray(testObject){
	return testObject && !(testObject.propertyIsEnumerable('length')) && typeof testObject === 'object' && typeof testObject.lenght === 'number';
}

//shorter
Object.prototype.isArray = function(){
	return this.contructor == Array;
}