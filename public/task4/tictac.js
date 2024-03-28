len = document.getElementsByTagName("td");

for(let i=0; i<len.length; i++)
{
    len[i].setAttribute("onclick","addFun(this)")
}

let toggle = 0;
   
function addFun(e)
{
if(toggle == 0)
{
    e.innerHTML = 0;
    toggle =1;
}
else
{
    e.innerHTML = "X";
    toggle = 0;
}

 let id1,id2,id3,id4,id5,id6,id7,id8,id9
  id1 = document.getElementById("1").innerHTML
  id2 = document.getElementById("2").innerHTML
  id3 = document.getElementById("3").innerHTML
  id4 = document.getElementById("4").innerHTML
  id5 = document.getElementById("5").innerHTML
  id6 = document.getElementById("6").innerHTML
  id7 = document.getElementById("7").innerHTML
  id8 = document.getElementById("8").innerHTML
  id9 = document.getElementById("9").innerHTML

 if((id1 == '0' && id2 == '0' && id3 == '0')||(id4 == '0' && id5 == '0' && id6 == '0') || (id7 == '0' && id8 == '0' && id9 == '0') || 
 (id1 == '0' && id4 == '0' && id7 == '0') || (id2 == '0' && id5 == '0' && id8 == '0') || (id3 == '0' && id6 == '0' && id9 == '0') ||
 (id1 == '0' && id5 == '0' && id9 == '0') || (id3 == '0' && id5 == '0' && id7 == '0'))
   {
    alert("PLayer 0 win");
    reloadpage()
   }
else if ((id1 == 'X' && id2 == 'X' && id3 == 'X')||(id4 == 'X' && id5 == 'X' && id6 == 'X') || (id7 == 'X' && id8 == 'X' && id9 == 'X') || 
 (id1 == 'X' && id4 == 'X' && id7 == 'X') || (id2 == 'X' && id5 == 'X' && id8 == 'X') || (id3 == 'X' && id6 == 'X' && id9 == 'X') ||
 (id1 == 'X' && id5 == 'X' && id9 == 'X') || (id3 == 'X' && id5 == 'X' && id7 == 'X'))
 {
    alert("Player X win");
    reloadpage()
    
 }
 else if((id1 == 'X' || id1 == '0')&&(id2 == 'X' || id2 == '0')&&(id3 == 'X' || id3 == '0')&&(id4 == 'X' || id4 == '0')&&
 (id5 == 'X' || id5 == '0')&&(id6 == 'X' || id6 == '0')&&(id7 == 'X' || id7 == '0')&&(id8 == 'X' || id8 == '0')&&(id9 == 'X' || id9 == '0'))
{
    alert("Game Draw")
    reloadpage()
}

function reloadpage()
{
    location.reload()
}
}   