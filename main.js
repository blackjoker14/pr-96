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
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user name"
});
}