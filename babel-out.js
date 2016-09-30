'use strict';

var list = ['Allan', 'Derek', 'Diodio', 'Felquis', 'Vitor', 'Gui'];

for (var i = list.length - 1; i >= 0; i--) {
	console.log('for1', list[i]);
}

for (var _i = list.length - 1; _i >= 0; _i--) {
	console.log('for2', list[_i]);
}

function foo(one, two) {
	console.log(one, two);
	return;
}

foo('string', 1);
