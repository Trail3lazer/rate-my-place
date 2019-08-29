// Get references to page elements

$(() => {
    $("#submitSeachBtn").click((e) => {
        e.preventDefault()
        let parameters = $('#searchParams').serializeArray();

        let formattedParams = [];

        for (let i in parameters) {
            if (parameters[i].value === '') { formattedParams.push("-/") }
            else { formattedParams.push(parameters[i].value + "/") }
        }
        formattedParams = formattedParams.join('')
        window.location.href = "/search/"+formattedParams;
    })
});
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// Add event listeners to the submit and delete buttons