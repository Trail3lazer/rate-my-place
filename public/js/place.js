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

    $("#newComment-submit").click((e)=>{
        e.preventDefault()
        let newComment = $("#newComment").serializeArray()
        console.log(newComment)
        $.ajax({
            type: "post",
            url: "url",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    })
})