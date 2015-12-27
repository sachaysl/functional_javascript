//To do: undestructive unshift and wrap function in another that hides acc

var map = function (items, transform) {

    var acc = [];
    if ( items.length == 0) { return []}

    function aux (items, transform, acc) {
	var [h, ...t] = items;
	if (t.length == 0) {
	    acc.unshift(transform(h));
	    return acc; }
	else { 
	    acc.unshift(transform(h));
	    return aux(t, transform, acc);
	}
    }

    return aux (items, transform, acc);
}

//  map ([1,2], x => x + 1);;
