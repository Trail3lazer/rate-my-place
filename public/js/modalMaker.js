let modalMaker = (placeID) => {
    let API = require("./ajax")
    $("#specificResultModal").remove();


    API['find-places']('id', placeID).then((placesArray)=>{
        let place = placesArray[0]
    API["find-comments"]('placeKey',placeID).then((commentsArray)=>{

    let formatedComments = $("<ul class='list-group'>")

    for (let i in commentsArray) {
        let comment = commentsArray[i]

        formatedComments.append(
            `<li class="list-group-item">
                <div class="row">
                    <h5>${comment.username}</h5>
                    <div>${comment.text}</div>
                    <div>${comment.rating} <span style="color: #FFE066"><i class="fas fa-star"></i></span></div>
                </div>
            </li>`
        )
    }

    // -- Begin Modal ->
    // -- I put modal in array so as that the sea of string could be shrunk when
    // -- viewing the code.
    let modal = 
    [`<div class="modal fade bd-place-modal-lg" tabindex="-1" role="dialog" aria-labelledby="My-Place-Modal" id="specificResultModal"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <h4 class="modal-title" id="myLargeModalLabel">${place.name}</h4>
            <hr />
            <div class="modal-content">
                <p>
                    ${place.propType}
                    <br />
                    ${place.streetAddress +' '+ place.city +', '+ place.state +' '+ place.zip}
                    <br />
                    ${place.phone}
                    <br />
                    ${place.propMgr}
                </p>
                <p>
                    <div class="d-inline-block">
                        ${place.rating}
                        <span style="color: #FFE066"><i class="fas fa-star"></i></span>
                    </div>
                </p>
                <hr />
                <!--COMMENT OPTION IF (userType = tenant)-->
                <form class="form-group" id="newCommment">

                    <textarea class="form-control" name="text" id="newComment-text" rows="2"></textarea>

                    <div class="form-group">
                        <label for="rating-select">Star Rating</label>
                        <select class="form-control" name="rating" id="rating-select">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" id="newComment-submit">Comment</button>
                </form>
                <hr />
                <!-- END COMMENT OPTION -->
                <!-- Comments -->
                <div class="comments">
                    ${formatedComments}
                </div>
                <!-- End Comments -->
            </div>
        </div>
    </div>`];

    // -- End Modal

    $("#newComment-submit").click((e)=>{
        e.preventDefault();
        let formData = $("newComment").serialize()
        API['create-comments'](formData);
    })

    $('body').append(modal[0])

}
)
})
}