
module.exports = (resultsArray) => {
    var target = $("#results-container")
    target.empty()

    $.map(resultsArray, function (element, index) {

        target.append(
            `<div class="card" data-placeId="${element.id}" type="button" data-toggle="modal" data-target=".bd-place-modal-lg" style="width: 18rem;">
                <img class="card-img-top" src="${element.imgHead}" alt="Card image cap">
                    <div class="card-img-overlay">
                        <h5 class="card-title">${element.name}</h5>
                    </div>
                    <div class="card-body">
                        <p>
                            ${element.streetAddress +' '+ element.city +', '+ element.state +' '+ element.zip}
                        </p>
                        <p>
                            ${element.rating}
                        </p>
                    </div>
                </div>
            </div>`

        )
    });


}