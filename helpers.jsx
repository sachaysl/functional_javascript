//To do: undestructive unshift

var map = function (transform, items) {

    if (typeof items == "undefined") { //partial
	return function (items) {
	    var acc = [];
	    if ( items.length == 0) { return [] ;}
	    function aux (items, transform, acc) {
		var [h, ...t] = items;

         	if (t.length == 0) {
		    acc.push(transform(h));
	 	    return acc; }
	        else {
		    acc.push(transform(h));
		    return aux(t, transform, acc);
		}
	    }
	    return aux (items, transform, acc);
	};
    }
    // full
    var acc = [];
    if ( items.length == 0) { return [] ;}

    function aux (items, transform, acc) {

	var [h, ...t] = items;

	if (t.length == 0) {
	    acc.push(transform(h));
	    return acc; }
	else { 
	    acc.push(transform(h));
	    return aux(t, transform, acc);
	}
    }

    return aux (items, transform, acc);
};
// map (x => x + 1, [1,2,3]);
// var add_one = map(x => x + 1);
// add_one([1,2,3]);

var filter = function (pred, list) {
    var acc = [];
    if ( list.length == 0) { return []; }

    function aux (list, pred, acc) {

	var [h, ...t] = list;

	if (t.length == 0) {
	    if (pred(h)) {acc.push(h);}
	    return acc;
	}
	else {
	    if (pred(h)) {acc.push(h);}
	    return aux(t, pred, acc);
	}
    }

    return aux (list, pred, acc);
};
// filter([1,2,3,4,6], x => ( x % 2 == 0));	    


//this reduce does not support partial functions
var reduce1 = function (comb, acc, list) {
    if ( list.length == 0 ) {return acc; }
    else {	
	var [h, ...t] = list;
	return reduce (comb , comb(acc,h), t );		      
    }
};
// reduce1 ((x, y) => x + y, 0, [1,2,3]);;


//this reduce supports one step currying on list
var reduce = function (comb, acc, list) {
    if (typeof list == "undefined") { //partial
	return function (list) {
	    if ( list.length == 0 ) {return acc; }
	    else {
		var [h, ...t] = list;
		return reduce (comb , comb(acc,h), t );
	    }
	};
    }
    //full application
    if ( list.length == 0 ) {return acc; }
    else {	
	var [h, ...t] = list;
	return reduce (comb , comb(acc,h), t );		      
    }
};
//var sum = reduce ((x, y) => x + y, 0);
//sum([1,2,3]);




    

    

    










    
