console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
	return this.split("").reverse().join("");
};

console.log("Escolar Cod3r".reverse());

Array.prototype.first = function () {
	return this[0];
};

console.log([0, 1, 2, 3].first());
console.log(["a", "b", "c"].first());

String.prototype.toString = function () {
	return "Lascou tudo";
};

console.log("Escolar Cod3r".reverse());
