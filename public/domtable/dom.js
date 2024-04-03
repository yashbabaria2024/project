      function eonclick()
      {
         alert("Onclick Event Fire");
      }
 
      function eonmouseover()
      {
        document.getElementById("mover").innerHTML = "MouseOver event Fire";
        mover.style.backgroundColor = "yellow";
      }
 
      function eonkeypress()
      {
         alert("Onkeypress Event Fire");
      }
      
      function eonblur()
      {
         alert("Onblur Event Fire");
      }
 
      function eondblclick()
      {
         alert("Ondblclick Event Fire");
      }
      
      const d = document.getElementById("menu1");
      d.addEventListener("contextmenu", (e) => {e.preventDefault()});
  

      function eoncopy()
      {
         document.getElementById('copy').innerHTML = alert("Text Copied"); 
         
      }
 
      function eoncut()
      {
         document.getElementById('cut').innerHTML = alert('Text Cut');
      }
 
      function epaste()
      {
         document.getElementById('paste').innerHTML = alert('do not paste text');
      }
   
      function eonfocus()
      {
         alert("focus event trigger");
      }
 
      function eonfocusin()
      {
         alert("focusin event trigger");
      }
 
      function eonfocusout()
      {
         alert("focusout event trigger");
      }
      
      function eoninvalid()
      {
         alert("please fill out field");
      }

 
      function onInput()
      {
      let text = document.getElementById("id_input").value;
      document.getElementById("id_value").innerHTML = "You wrote: " + text;
      }

    // Error Event
    function errorFun()
    {
        document.getElementById("").innerHTML;
    } 
 
    // Select Event
    document.getElementById("id_select").addEventListener("select", myFunction1);

        function myFunction1() {
        alert("select");
        }

    // mouseenter

    function menterFun()
    {
        document.getElementById("menter").innerHTML = "MouseEnter Event trigger";
        menter.style.backgroundColor = "red";
    }

    // mouseleave

    function mleaveFun()
    {
        document.querySelector("#mleave").innerHTML = "MouseLeave Event trigger";
        mleave.style.backgroundColor = "green";
    }

    function mupFun()
    {
        document.querySelector("#mup").innerHTML = "MouseUP Event trigger";
        mup.style.backgroundColor = "Orange";
    }

   function blurFun()
   {
    alert("Blur event trigger");
    
   }