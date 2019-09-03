$(() => {

    // ---     This section applies stars equal to the avg rating to each card ---
    let rating = $(`#place-rating`).data("rating");
    for (let i = 0; i < rating; i++) {
        $(`#place-rating`).append(`<span style="color: #FFE066"><i class="fas fa-star"></i></span>`)
    }

    let div = $(".rating")

    for (let cardIndex in div) {
        let rating = $(`#${cardIndex}-rating`).data("rating");
        for (let i = 0; i < rating; i++) {
            $(`#${cardIndex}-rating`).append(`<span style="color: #FFE066"><i class="fas fa-star"></i></span>`)
        }
    }
    // --- stars finish


    $("#newComment-submit").click((e) => {
        e.preventDefault()
        let newComment = $("#newCommment").serializeArray()
        let commentObj = {}


        for (let i in newComment) {
            let idxObj = newComment[i];
            commentObj[idxObj.name] = idxObj.value
        }

        $.ajax({
            type: "post",
            url: "/api/comments",
            data: commentObj,
            success: (data) => {
                let placeId = data.placeKey;
                $.ajax({
                    type: "PUT",
                    url: "/api/rating/" + placeId,
                })
            }
        });

        setTimeout(()=>{location.reload()}, 100)
    });
});