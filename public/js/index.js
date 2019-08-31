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
