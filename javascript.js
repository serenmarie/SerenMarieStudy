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
             messages.innerHTML += `
             <button>Text</button>
             <li>${doc.data().info}</li>
             `
        });
    });
