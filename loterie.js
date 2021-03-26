function entierAleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i=0; i<5; i++) {
	let number = entierAleatoire(1, 50);
	array.push(number);
}
//array.sort() ?? voir si on classe les numéros dans l'ordre
console.log(array);
//vérifier ensuite qu'il n'y a pas de numéros identiques
