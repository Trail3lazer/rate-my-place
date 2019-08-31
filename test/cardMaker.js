
module.exports = (resultsArray) => {
    var target = []

    resultsArray.map(function (place, index) {
        let img = place.img || "http://placekitten.com/200/300";
        target.push(
         {  card: `<div class="card place-card" data-placeId="${place.id}" type="button" data-toggle="modal" data-target=".bd-place-modal-lg" style="width: 18rem;">
                <img class="card-img-top" src="${img}" alt="Card image cap">
                    <div class="card-img-overlay">
                        <h5 class="card-title">${place.name}</h5>
                    </div>
                    <div class="card-body">
                        <p>
                            ${place.streetAddress +' '+ place.city +', '+ place.state +' '+ place.zip}
                        </p>
                        <p>
                            <div class="d-inline-block">
                                ${place.rating}
                                <span style="color: #FFE066"><i class="fas fa-star"></i></span>
                            </div>
                        </p>
                    </div>
                </div>
            </div>`}
        )
    });

    return target

}