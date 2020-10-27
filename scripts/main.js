
whiteCards = [];
blackCards = [];

deck = 
{
    "ownerId": "19631652",
    "packId": "91ILZ",
    "packName": "Tentativo due",
    "name" : "prova",
    "description" : "descrzione prova",
    "responses" : [], //white cards
    "calls" : [], //black cards 
    "isEdited": true,
    "isNsfw": true,
    "isPublic": true,
    "categories": [
      "Non-English Language"
    ]

}   

//white card
$("#submitWhiteCard").click(function(){

    this.$whiteCardText = $("#whiteCardText");

    if(this.$whiteCardText.val() === "")
    {
        alert("impossibile aggiungere una carta senza testo");
    }
    else
    {
        var tmp_text = { "text" : this.$whiteCardText.val()};
        whiteCards.push(tmp_text);
    }
    
  });

//black card
$("#submitBlackCard").click(function(){
    this.$blackCardText = $("#blackCardText");
    
    this.blankSpaceString = "<blank>";

    if(this.$blackCardText.val() === "")
    {
        alert("impossibile aggiungere una carta senza testo");
    }
    else
    {
        var res = this.$blackCardText.val().split(this.blankSpaceString);
        var value = { "text" : res}
        blackCards.push(value);
    }
});


$("#downloadDeck").click(function(){

    //create the json

    deck["responses"] = whiteCards;
    deck["calls"] = blackCards;

    var json = JSON.stringify(deck);
    

    //download the json file
});