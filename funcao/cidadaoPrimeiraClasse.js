// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma váriavel
const fun2 = function () {};

// Armazenar em um array
const array = [
	function (a, b) {
		return a + b;
	},
	fun1,
	fun2,
];
