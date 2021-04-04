const over = document.getElementById("over18");

over.addEventListener("click", function(){
    document.location.href = 'game.html';
});

const under = document.getElementById("under18");

under.addEventListener("click", function(){
    document.getElementById("avertissement").innerHTML = "Revenez quand vous serez majeur !";
});
