
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
    if (typeof list == "undefined") {
	return function(list) { //partial
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
    }
    // full
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
    
// filter(x => ( x % 2 == 0), [1,2,3,4,5,6]);
// var evens = filter(x => ( x % 2 == 0));
// evens([1,2,3,4,5,6]);

//this reduce does not support partial functions
var reduce1 = function (comb, acc, list) {
    if ( list.length == 0 ) {return acc; }
    else {	
	va1r [h, ...t] = list;
	return reduce (comb , comb(acc,h), t );		      
    }
};
// reduce1 ((x, y) => x + y, 0, [1,2,3]);;
// var sum1 = (list => (reduce1((x, y) => x + y, 0, list)));


//this reduce supports one step partial functiona application on list
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
//reduce ((x, y) => x + y, 0, [1,2,3]);;
//var sum = reduce ((x, y) => x + y, 0);
//sum([1,2,3]);
//var concat = reduce ((x, y)=> x + y, "");
//concat(["hi ", "there ", "jimmy"]);


//implement tl
var tl = function(list) {
    var [h, ...t] = list;
    return t;
};

//implement hd
var hd = function(list) {
    var [h, ...t] = list;
    return h;
};

//implement nth
// implement parial evaluation version
var nth = function(n, list) {
    
    function aux(n, list, acc) {
	if(list.length == 0 ) { throw new Error("List has less than n items") }
	var [h, ...t] = list;
	if ( acc == n) { return h; }
	else { return aux(n, t, acc + 1); }
    };
    return aux(n, list, 0);
};
//var 5th = function(list) { return nth(5,list); };

var length = function(list) {

    function aux(list, length) {
	if(typeof list[0] == "undefined") { return length; }

	else {
	    var [h, ...t] = list;
	    return aux(t, length + 1);
	};
    }

    return aux(list, 0);
};

//implement rev
var rev = function(list) {

    function aux(list, acc) {
	if(typeof list[0] == "undefined") {return acc; }

	else {
	    var [h, ...t] = list;
	    acc.unshift(h);
	    return aux(t, acc);
	}
    }

    return aux(list, []);
};

//implement flatten
var flatten = function(listOfLists) {
    function aux(listOfLists, acc) {
	if(typeof listOfLists[0] == "undefined") {return acc; }
	else {
	    var [h, ...t] = listOfLists;
	    return aux(t, acc.concat(h));
	};
    };

    return aux(listOfLists, []);
};

//implement append
var append = function(list1, list2) {

    var aux = function(list1,list2, acc) {
	if (typeof list1[0] == "undefined") { return acc.concat(list2); }
	else {
	    var [h, ...t] = list1;
	    return aux(t, list2, acc.concat(h));
	}
    };

    return aux(list1,list2, []);
};

//implement reduce_right

//implement find

//implement find_all

//implement merge



    

    

    










    
