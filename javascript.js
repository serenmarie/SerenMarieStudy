// FIREBASE
const config = {
  apiKey: "AIzaSyB2AC6ClkI-dFwoGi-alCoNhdEybf7H5Us",
    authDomain: "clipboard-c019a.firebaseapp.com",
    projectId: "clipboard-c019a",
    storageBucket: "clipboard-c019a.appspot.com",
    messagingSenderId: "483792512383",
    appId: "1:483792512383:web:b1d45f9f4944aa1392664a"
};
firebase.initializeApp(config);
var db = firebase.firestore();
var messages = document.getElementById("bodyChatHisMes");
var textbox = document.getElementById("bodyChatSenTexAr");
var button = document.getElementById("postSubmit");
button.addEventListener("click", function(){
     var newMessage = textbox.value.replaceAll("<","&lt;");
     var d = new Date();
     var n = d.getTime();
     if(newMessage != ''){
       db.collection("clip").doc("T: "+n).set({
         info: newMessage
       })
       .then(function(docRef) {
         // console.log("Document written with ID: ", docRef.id);
       })
       .catch(function(error) {
         console.error("Error adding document: ", error);
       });
       textbox.value = "";
      }
    });
    //Leer
    db.collection("clip").onSnapshot((querySnapshot) => {
        messages.innerHTML = '';
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().info}`);
             messages.innerHTML += `<li><button class="buttonShow">Copy</button><div class="messagesIn">${doc.data().info}</div></li>`
            //  var buttonShowJ = document.getElementsByClassName("buttonShow");
            //  var i = 0;
            //  while( i < buttonShowJ.length){
            //    buttonShowJ[i].style.fontFamily = "Inter";
            //    i++;
            // }
        });
    });
    //
    // var delayBecauseFirebase = 1000 ;
    // function sendText(){
      // var messagesInJ = document.getElementsByClassName("messagesIn");
      // var info = messagesInJ[1].innerText; //Here you have your text
      // var range = document.createRange();
      //
      // range.selectNode(messagesInJ[1]);
      // window.getSelection().removeAllRanges();
      // window.getSelection().addRange(range);
      // console.log(messagesInJ);
      //
      // document.execCommand("copy");
      // console.log("Hello " + who);
    // }
    // var who = 0;
    // var buttonShowJ = document.getElementsByClassName("buttonShow");
    // function addClickListener() {
      // if(buttonShowJ){
      //   var i = 0;
      //   while( i < buttonShowJ.length){
      //     buttonShowJ[i].addEventListener("click", sendText);
      //     who = i;
      //     i++;
      //  }
      // }else{
      //   console.error("Copy button not found");
      // }
    }
    // setTimeout(addClickListener, delayBecauseFirebase);















    //
