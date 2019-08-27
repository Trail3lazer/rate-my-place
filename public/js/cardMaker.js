
module.exports = (resultsArray) => {
    var target = $("#results-container")
    target.empty()

    $.map(resultsArray, function (element, index) {

        target.append(
            `<div class="card" type="button" data-toggle="modal" data-target=".bd-place-modal-lg" style="width: 18rem;">
                <img class="card-img-top" src="${element.imgHead}" alt="Card image cap">
                    <div class="card-img-overlay">
                        <h5 class="card-title">${element.name}</h5>
                    </div>
                    <div class="card-body">
                        <p>
                            result[i].streetAddress result[i].city result[i].state result[i].zip
                        </p>
                        <p class=''>
                            result[i].rating
                        </p>
                    </div>
                </div>
            </div>`

        )
    });


}