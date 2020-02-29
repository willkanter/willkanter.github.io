var uniqueID = 0;

function addCard(cardName){
  var newID =  "card" + uniqueID; // this creates a unique ID for the tweet
  console.log(newID); // to check and ensyre the IDs are changing
  uniqueID++;
  var tweet = $('<div id=' + newID + ' class="card mb-3" style="max-width:400px" ><button type="button" class="btn btn-danger btn-sm" onclick = "deleteCard('+ newID +')">X</button> <img class="card-img-top" src="img/twitter-logo.png" alt="twit"><div class = "card-body"><p class = "card-text">I hate twitter and really dont want its API :)</p></div></div>'); // Spaghetti Monolith
  tweet.appendTo(cardName); // add the spaghetti to the card
}

function deleteCard(cardID){
  console.log(cardID); // check to make sure we delete the right card
  cardID.remove(); // cardID is literally the card, like a pointer, not a string, no need for document.getElementById()
}
