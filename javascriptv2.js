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
            // buttonBig.style.animation = "buttonMagicv2";
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


        // if((lastScrollTop - st) > 0){
        //   document.getElementById("headerIndex").style.top = "0";
        //   // document.getElementById("headerIndex").style.borderBottom = "1px solid #3a3b3c";
        //   document.getElementById("headerIndex").style.boxShadow= "0px -2px 10px rgba(0, 0, 0, 1)";
        //   if(st == 0){
        //     // document.getElementById("headerIndex").style.borderBottom = "none";
        //     document.getElementById("headerIndex").style.boxShadow= "none";
        //   }
        // }



        var lastScrollTop = 0;
        window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop){
            document.getElementById("headerIndex").style.top = "-100%";
          } else {
            document.getElementById("headerIndex").style.top = "0";
            // document.getElementById("headerIndex").style.borderBottom = "1px solid #3a3b3c";
            document.getElementById("headerIndex").style.boxShadow= "0px -2px 10px rgba(0, 0, 0, 1)";
            if(st == 0){
              // document.getElementById("headerIndex").style.borderBottom = "none";
              document.getElementById("headerIndex").style.boxShadow= "none";
            }
          }
          // console.log(st);
          lastScrollTop = st;
        }, false);
