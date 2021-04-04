//création 25 cases
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

for (let i=1; i<=25; i++) {
	createCase(i);
}

//tirage 5 numéros distincts
function entierAleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i=0; i<5; i++) {
	let number = entierAleatoire(1, 25);
  	if (array.includes(number)) {
  	i -= 1;
  	} else {
	array.push(number);
	}
}

//affichage des numéros sortis dans l'ordre croissant
function compare(x, y) {
	return x - y;
}
array.sort(compare);
document.getElementById("resultat").innerHTML = array.join("-");


//sélection des numéros par le joueur

const choice = document.querySelectorAll(".ccase-class");
for (let i=0; i<choice.length; i++) {
choice[i].addEventListener("click", function(event){
	if ( event.currentTarget.style.backgroundColor === 'red') {
		event.currentTarget.style.backgroundColor = "rgb(226, 228, 195)";
	} else {
		event.currentTarget.style.backgroundColor = 'red';
	}
 });
 }

// let array= [];
// let n=0;
// while (n<5) {
// array.push(i+1);
// n++;
// }