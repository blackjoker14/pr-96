const firebaseConfig = {
    apiKey: "AIzaSyBSMcjtpZebwnPNq93Bb5Q4lmzP4BoES-E",
    authDomain: "database-of-kwitter-app.firebaseapp.com",
    databaseURL: "https://database-of-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "database-of-kwitter-app",
    storageBucket: "database-of-kwitter-app.appspot.com",
    messagingSenderId: "829237162866",
    appId: "1:829237162866:web:f0878b7c777b6a1eda63eb",
    measurementId: "G-ESM2XTSYYT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("username");
   room_name = localStorage.getItem("room_name");
    
   function send(){
       const fb = firebase.database().ref();

       
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
           name: user_name,
           message: msg,
           like:0
       })
       document.getElementById("msg").value = "";
       document.getElementById("output").innerHTML = user_name + ": " + msg;
   }


  