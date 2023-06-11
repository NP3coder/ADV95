const firebaseConfig = {
      apiKey: "AIzaSyDYED8JHSNGQlK0oj9KZSI2RluaGyjYfhY",
      authDomain: "kwitter-b1c4e.firebaseapp.com",
      databaseURL: "https://kwitter-b1c4e-default-rtdb.firebaseio.com",
      projectId: "kwitter-b1c4e",
      storageBucket: "kwitter-b1c4e.appspot.com",
      messagingSenderId: "101262757432",
      appId: "1:101262757432:web:e138b98fb6689f1a4460cd",
      measurementId: "G-HVTZRXSRTB"
    };
    
function getData() 


{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name -"+ Room_names);
       row ="<div class='room_name' "
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            prupose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";
}

function send() {
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push ({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
}

}