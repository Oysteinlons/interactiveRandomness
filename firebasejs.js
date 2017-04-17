var firebaseRef = firebase.database().ref();

var purchaseCounter = 0;
var timeCounter = 0;
var price = 1;
var testTall = 0;
var number = 0;
var currentLink = 0;
var firebaseLink = 0;
var i = 0;
var lastLinkSubmitted = 0;

firebaseRef.child("linkCounter").once('value').then(function(snapshot){
			i = snapshot.val();

	});

setInterval(checkForUpdate, 10);
setInterval(updatePrice, 1);

function checkForUpdate(){

		currentLink = document.getElementById("pic1").src;
		//console.log("The link showed in <img> tags is: " +currentLink)

		if(!(currentLink == firebaseLink)){
		//	console.log(currentLink+ " and " +firebaseLink+ " is the same");
			getPicFromFirebase();
		}

		firebaseRef.child("imgSRC").once('value').then(function(snapshot){

		firebaseLink = snapshot.val();
		//console.log("The link on firebase is: " +firebaseLink);

	});
}

function updatePrice(){

timeCounter += 1;
if(timeCounter == 10){
	price += purchaseCounter*purchaseCounter;
	timeCounter = 0;
	console.log(purchaseCounter)
	purchaseCounter = 0;
}

price -= 0.005;
document.getElementById("price").innerHTML = price.toFixed(3);
}

function updatePicOnFirebase(){

	purchaseCounter += 1;
	i += 1;
	price += 1;
	
	firebaseRef.child("linksSubmitted").child(i).once('value').then(function(snapshot){
		lastLinkSubmitted = snapshot.val();
	});

	newInfo1 = document.getElementById("inpt1").value;
	
	firebaseRef.child("imgSRC").set(newInfo1);
	firebaseRef.child("linkCounter").set(i);
	//lag en if setning her og sjekk om newInfo1 er lik den siste linken
	// som ble pasta i firebase 
	
	firebaseRef.child("linksSubmitted").child(i).set(newInfo1);
	
	console.log("The link: " +newInfo1+ " was printed into linksSubmitted object in firebase");

	console.log("pasted " +newInfo1+ " inside the child " +testTall+ "");

}

function getPicFromFirebase(){

	firebaseRef.child("imgSRC").once('value').then(function(snapshot){
			nyData = snapshot.val()
			console.log("NyData: ", nyData)
			console.log("Snapshot from firebase database: ", snapshot)
			document.getElementById("pic1").src = nyData;
	});

}

/*
http-server -a localhost -p 8000 -c-1

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
<<<<<<< Updated upstream
*/