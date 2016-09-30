let list = ['Allan', 'Derek', 'Diodio', 'Felquis', 'Vitor', 'Gui']

for (let i = list.length - 1; i >= 0; i--) {
	console.log('for1', list[i])
}

for (let i = list.length - 1; i >= 0; i--) {
	console.log('for2', list[i])
}

function foo(one, two: number) {
	console.log(one, two)

	return
}

foo('string', 1)
