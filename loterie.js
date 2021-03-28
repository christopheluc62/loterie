function createCase(number) {
	const container = document.querySelector(".container-grid");
	const ccase = document.createElement("div");
	ccase.classList.add("ccase-class");
	container.appendChild(ccase);

	const ccaseNumber = document.createElement("h2");
  	ccaseNumber.classList.add("ccaseNumber-class");
	ccaseNumber.innerHTML = `${number}`;
	ccase.appendChild(ccaseNumber);
}

for (let i=2; i<=25; i++) {
	createCase(i);
}

function entierAleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i=0; i<5; i++) {
	let number = entierAleatoire(1, 25);
	array.push(number);
}
document.getElementById("resultat").innerHTML = array.join("-");


//vérifier ensuite qu'il n'y a pas de numéros identiques

//pour trier dans l'ordre croissant
// const array=[4,12,68,0,1,56,23,4];

//   function compare(x, y) {
//     return x - y;
//   }
// let nombres = array;
// nombres.sort(compare);

// if(nombres === array) {
// console.log("true");
// } else {
// console.log("false");
// }