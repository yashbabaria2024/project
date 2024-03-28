var cell,rcell,randomcolor;
var countscore = 0

function addColFun()
{
countscore++;
document.getElementById("label1").innerHTML ="Score:" +countscore;

document.getElementsByClassName("tdid")[rcell].removeAttribute("style");
document.getElementsByClassName("tdid")[rcell].removeAttribute("onclick");

table = document.getElementById("mytable");
addrow = table.insertRow();
collength = table.rows[0].cells.length;
index = 2

for(let i=0; i<collength; i++)
{   
   let cell = addrow.insertCell(i)
   cell.innerHTML = "o";
   cell.setAttribute("class","tdid");
   cell.style.textAlign = "center";
}

for(let i=0; i<table.rows.length; i++)
{
   let cell = table.rows[i].insertCell(index)
   cell.innerHTML = "o" ;
   cell.setAttribute("class","tdid");
   cell.style.textAlign = "center";
}
randomcolorFun()
randomcell()
}

function randomcolorFun()
{
let r = Math.floor(Math.random(10)*255);
let g = Math.floor(Math.random(10)*255);
let b = Math.floor(Math.random(10)*255);
let c = `rgb(${r},${g}, ${b})`;

var tdlen =  document.getElementsByTagName("td");

for(let i=0; i<tdlen.length; i++){
    tdlen[i].style.background = c;
}
}

function randomcell()
{
let rand = document.getElementsByClassName("tdid");
rcell = Math.floor(Math.random() *(rand.length - 1) + 1);
document.getElementsByClassName("tdid")[rcell].style.opacity = "0.090";
document.getElementsByClassName("tdid")[rcell].setAttribute("onclick","addColFun()");
randomcolorFun()
}

randomcell();

count = 10;
const over = setInterval(function(){
count--;
document.querySelector("#label2").innerHTML = "Timer:" +count;
if(count === 0)
{
    clearInterval(over);
    document.getElementById("mytable").remove;
    document.write("Game Over: Your Score " + countscore);
}
},1000);