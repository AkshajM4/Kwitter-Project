const firebaseConfig = {
  apiKey: "AIzaSyBk6aJ5TKfbcs8LW1qbzWVsqLz8xLApqwQ",
  authDomain: "kwitter-c51d5.firebaseapp.com",
  databaseURL: "https://kwitter-c51d5-default-rtdb.firebaseio.com",
  projectId: "kwitter-c51d5",
  storageBucket: "kwitter-c51d5.appspot.com",
  messagingSenderId: "307604120578",
  appId: "1:307604120578:web:c5ed61ddd224f47f39331b",
  measurementId: "G-93PF8NGTJY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()  //this is for entering the main page of kwitter app
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";    
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName (name)
{
console.log(name);
localStorage.steItem("room_name", name);
window.location = "kwitter_page.html"
}




