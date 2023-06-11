function adduser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem = ("user_name", user_name);

    window.location = "kwitter_room.html";

}

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