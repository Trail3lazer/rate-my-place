// Get references to page elements
let API= require("./ajax.js/index.js");
let cardPrinter= require("../../routes/cardMaker.js/index.js");
let modalMaker = require("./modalMaker");

$(()=> {
  API["get-places"]().then((results)=>{
    cardPrinter(results)



    $("#place-card").click((e)=>{
      console.log(this)
      let placeId = $(this).data("placeId");
      modalMaker(placeId)
  })
  })
});
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// Add event listeners to the submit and delete buttons