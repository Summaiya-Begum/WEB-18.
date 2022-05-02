// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", myfunction);
var arr = JSON.parse(localStorage.getItem("schedule")) || []

function myfunction(){
event.preventDefault();

var obj = {
    matchs: masaiForm.matchNum.value,
    team1: masaiForm.teamA.value,
    team2: masaiForm.teamB.value,
    date: masaiForm.date.value,
    ven:masaiForm.venue.value
}
arr.push(obj)
localStorage.setItem("schedule",JSON.stringify(arr));
//console.log(arr)
window.location.href="matches.html"
}