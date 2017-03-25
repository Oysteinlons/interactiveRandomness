(function(){

 // // Initialize Firebase
 //  var config = {
 //    apiKey: "AIzaSyDthJrlu5rWBsdcwitIWYoGY8dA65DxGvI",
 //    authDomain: "friendlychat-d43d6.firebaseapp.com",
 //    databaseURL: "https://friendlychat-d43d6.firebaseio.com",
 //    storageBucket: "friendlychat-d43d6.appspot.com",
 //    messagingSenderId: "545387915863"
 //  };
 //  firebase.initializeApp(config);

var testTall = 0;
var number = 0;
//setInterval(skiftBilde, 100);
//lag en funksjon som skifter bilde 10 ganger i sekundet
function skiftBilde(){
		if(number == 4){
			number = 0
		}
		number += 1;
		if (number == 1){
			newInfo1 = "http://i.imgur.com/yqPpUT6.jpg";
		}else if(number == 2){
			newInfo1 = "http://i.imgur.com/YJ9Kkf6.png";
		}else if(number == 3){
			newInfo1 = "http://i.imgur.com/oZ7aG8x.jpg";
		}
		document.getElementById("pic1").src = newInfo1;

}
/*
while(true){
	//Skal oppdatere bildet til den firebaseteksten hele tiden.
	//document.getElementById("pic1").src = Referer til imgSRC linken;
}
*/
function submitClick(){
	testTall += 1;

	//The image html tag should update 
	//fast with the firebase  object you set as the image website
	var firebaseRef = firebase.database().ref();
	var nyData = "";
	var dataFromFirebaseDatabase = firebaseRef.child("imgSRC").once('value').then(function(snapshot){
			nyData = snapshot.val()
			console.log("NyData: ", nyData)
			console.log("Snapshot from firebase database: ", snapshot)
	});

	var newInfo1 = document.getElementById("inpt1").value;
	firebaseRef.child("imgSRC").set(newInfo1);

	console.log("pasted " +newInfo1+ " inside the child " +testTall+ "");

	//<image></image> sourcen skal refferere til et firebase object (new)
	// document.getElementById("pic1").src = firebaseRef.child("imgSRC");
	document.getElementById("pic1").src = nyData;
}


/*
http-server -a localhost -p 8000 -c-1

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }




Hei, dette er awiudhawOIUDGWAFOUyasgwefpaweåahahahahh
*/




}());