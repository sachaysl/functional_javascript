//To do: undestructive unshift

var map = function (items, transform) {

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
// map ([1,2,3], x => x + 1);

var filter = function (list, pred) {
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
