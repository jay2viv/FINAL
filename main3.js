const firebaseConfig = {
    apiKey: "AIzaSyDRA4uPaL9plJDLL8bEMVaLB0vNe8onrA0",
    authDomain: "final-e3a76.firebaseapp.com",
    databaseURL: "https://final-e3a76-default-rtdb.firebaseio.com",
    projectId: "final-e3a76",
    storageBucket: "final-e3a76.appspot.com",
    messagingSenderId: "812038281808",
    appId: "1:812038281808:web:e3c321522a38a009a48f55"
  };
  firebase.initializeApp(firebaseConfig);
  

function friedrice()
{
    window.location = "index3.html";
}

function dessert_kidmeal()
{


    var current = new Date();
      firebase.database().ref("/").child("dessert_kidmeal").update({
            order_time:current.toLocaleDateString()
            
      });


    window.location = "index3.html";
}

function curry()
{
    window.location.replace("index3.html");
}
  
  
 