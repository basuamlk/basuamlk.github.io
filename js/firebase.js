
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPdjVIhky5SOQgOGKMq_l9Pqebyfwj8-U",
    authDomain: "personalwebsite-c4e5e.firebaseapp.com",
    databaseURL: "https://personalwebsite-c4e5e.firebaseio.com",
    projectId: "personalwebsite-c4e5e",
    storageBucket: "personalwebsite-c4e5e.appspot.com",
    messagingSenderId: "1032815515123"
  };
  firebase.initializeApp(config);




var Uname = document.getElementById('name');
var email = document.getElementById("email");
var phone = document.getElementById('phone');
var message = document.getElementById('message');
var send = document.getElementById('sendMessageButton');
console.log(firebase);






function clicked() {


	var database = firebase.database();
	var ref = database.ref(Uname.value);

	var data = {
		email : email.value,
		phone : phone.value,
		message: message.value
	}
	ref.push(data);
	setTimeout(function(){
		alert("Thank You! I'll reply back to you shortly!");
}, 300);

}
