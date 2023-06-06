function index() {
    var number = Math.random();
    number *= 6;
    return Math.floor(number);
}
var index1 = index()+1;
var index2 = index()+1;
if (index1 > index2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!!!";
}
else if (index1 < index2) {
    document.querySelector(".container h1").textContent = "Player 2 Wins!!!";

}
else {
    document.querySelector(".container h1").textContent = "Draw!!!,Refresh again!";
}
newpath1="images/dice"+index1+".png";
newpath2="images/dice"+index2+".png";
document.querySelector(".container .dice .img1").setAttribute("src",newpath1);
document.querySelector(".container .dice .img2").setAttribute("src",newpath2);