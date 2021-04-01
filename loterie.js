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



const choice = document.querySelector(".ccase-class");
choice.addEventListener("click", function(){
	document.getElementById("test").innerHTML = "Case sélectionnée";
});

//const choice = document.querySelectorAll("div.ccase-class");