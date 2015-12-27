//To do: undestructive unshift and wrap function in another that hides acc

var map = function (items, transform, acc) {
	var [h, ...t] = items;
	if (t.length == 0) {
	    acc.unshift(transform(h));
	    return acc; }
	else { 
	    acc.unshift(transform(h));
	    return map(t, transform, acc);
	}
}

//  map ([1,2], x => x + 1 , []);;
