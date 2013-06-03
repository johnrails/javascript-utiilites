var firstNode = {
	data: 12,
	next: null
}

function LinkedList(){
	this._length = 0;
	this._head = null;
}

LinkedList.prototype = {
	add: function(data){
		var node = {
			data:data,
			next:null
		},
		// used to traverse the structure
		current;
		//special case: no items in the list yet
		if(this._head === null){
			this._head = node;
		}else{
			current = this._head;
			while(current.next){
				current = current.next
			}
			current.next = node;
		}
		//update the count
		this._length++;
	}
}