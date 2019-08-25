// Get references to page elements
var $searchText = $("#search");
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
let databases = ['places', 'users', 'comments'];
var API = {};


for (let i in databases) {

  API[`create-${databases[i]}`] = function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: `api/${databases[i]}`,
      data: JSON.stringify(example)
    });
  };

  API[`read-${databases[i]}`] = function () {
    return $.ajax({
      url: `api/${databases[i]}`,
      type: "GET"
    });
  };
  
  API[`find-${databases[i]}`] = function (search) {
    return $.ajax({
      url: `api/${databases[i]}/find/${search}`,
      type: "GET"
    });
  };

  API[`update-${databases[i]}`] = function (id, update) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: `api/${databases[i]}/${id}`,
      data: JSON.stringify(update)
    });
  };

  API[`delete-${databases[i]}`] = function (id) {
    return $.ajax({
      url: `api/${databases[i]}/` + id,
      type: "DELETE"
    });
  };
};

// refreshExamples gets new examples from the db and repopulates the list

var refreshPlaces = function () {
  API['read-places']().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.URL)
        .attr("href", "/example/" + example.id);

      var $title = $('<h1>')
        .text(example.name)

      var $address = $('<p>')
        .text(`${example.streetAddress} ${example.city}, ${example.state} ${example.zip}`);

      var children = [$title, $address, $a];

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        });

      for (let i in children){
        $li.append(children[i])
      }
    
      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  let text = $searchText.val().trim();

  API[`find-${databases[i]}`](text).then(function () {
    refreshPlaces();
  });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
