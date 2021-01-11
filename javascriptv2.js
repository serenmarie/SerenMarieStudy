      var buttonMenu = document.querySelector("#tHeaderIndexB");
      var buttonMenuv2 = document.querySelector("#tHeaderIndexBv2");
      var lateralMenu = document.getElementById("headerBodyLateral");
      var buttonBig = document.getElementById("headerBodyLateralOp")
      var body = document.querySelector("body");
        if(buttonMenu){
            buttonMenu.addEventListener("click",function(){
            // lateralMenu.style.display = "flex";
            buttonMenu.style.display = "none";
            buttonMenuv2.style.display = "flex";
            body.style.overflow = "hidden";
            lateralMenu.style.display = "flex";
            lateralMenu.style.animation = ".2s moveMenu forwards";
            buttonBig.style.display = "flex";
            buttonBig.style.animation = ".2s buttonMagic";
          });
        }else{
          console.error("xD");
        }
        if(buttonMenuv2){
          buttonMenuv2.addEventListener("click",function(){
            // lateralMenu.style.display = "none";
            // buttonMenuv2.style.display = "none";
            buttonMenu.style.display = "flex";
            body.style.overflow = "visible";
            lateralMenu.style.animation = ".2s moveMenuv2 forwards";
            buttonBig.style.animation = "8s buttonMagicv2";
            buttonBig.style.display = "none";
          });
          buttonBig.addEventListener("click",function(){
            // lateralMenu.style.display = "none";
            // buttonMenuv2.style.display = "none";
            // buttonMenu.style.display = "flex";
            buttonMenu.style.display = "flex";
            body.style.overflow = "visible";
            lateralMenu.style.animation = ".2s moveMenuv2 forwards";
            buttonBig.style.display = "none";
          });
        }else{
          console.error("xDv2");
        }
        var x = window.matchMedia("(max-width: 980px)");
        function verSizeWindow(x){
          if (x.matches) {
            buttonMenu.style.display = "flex";
            lateralMenu.style.animation = "0s moveMenuv2 forwards";
            // buttonBig.style.display = "none"
           } else {
             lateralMenu.style.display = "none";
             buttonMenuv2.style.display = "none";
             buttonMenu.style.display = "none";
             body.style.overflow = "visible";
             buttonBig.style.display = "none"
           }
        }
        verSizeWindow(x);
        x.addListener(verSizeWindow);
