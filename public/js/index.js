// Get references to page elements

const card = (index, place) => {

    if (!place.img) { place.img = "https://via.placeholder.com/300x200/B5D8FF/808080?Text=Add/" }
    // <img class="card-img-top d-flex col-12" style="height: 200px" src=${place.img} alt="Card image cap">
    let html = (`<a class="list-group-item list-group-item-action" href="/place/${place.id}">
    
            <h5 class="card-title">${place.name}</h5>       
            <div class="card-body">
                    ${place.streetAddress}
                    ${place.city}, ${place.state} ${place.zip}
                    <br>
                    <div class="d-inline-block place-rating" data-rating=${place.ratingAvg} id="${index}-place-rating"></div>
            </div>
        
    </a>`)

    return html

}

let placeStarMaker = () => {
    // ---     This section applies stars equal to the avg rating to each card ---

    let div = $(".place-rating")

    for (let index in div) {
        let rating = $(`#${index}-place-rating`).data("rating")

        for (let i = 0; i < rating; i++) {
            $(`#${index}-place-rating`).append(`<span style="color: #FFE066"><i class="fas fa-star"></i></span>`)
        }
    }
};

let getCards = () => {
    $("#results-container").empty()

    let parameters = $('#searchParams').serializeArray();

    let formattedParams = [];

    for (let i in parameters) {
        if (parameters[i].value === '') { formattedParams.push("-/") }
        else { formattedParams.push(parameters[i].value + "/") }
    }
    formattedParams = formattedParams.join('')

    $.ajax({
        type: "GET",
        url: "/api/search/" + formattedParams,
        success: function (cards) {
            cards.map((value, index) => {
                $("#results-container").append(card(index, value))
            })
            placeStarMaker()
        }
    });
}

$(() => {
    $("#submitSeachBtn").click((e) => {
        e.preventDefault();
        getCards();
        $('#sidebar').toggleClass('active');
    })

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    getCards()
});

$('.dropdown-menu').on('click', function(e) {
    e.stopPropagation();
  });