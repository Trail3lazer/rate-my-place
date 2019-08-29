$(() => {

    // ---     This section applies stars equal to the avg rating to each card ---

    let div = $(".rating")
    for (let cardIndex in div) {
        let rating = $(`#${cardIndex}-rating`).data("rating");

        for (let i = 0; i < rating; i++) {
            $(`#${cardIndex}-rating`).append(`<span style="color: #FFE066"><i class="fas fa-star"></i></span>`)
        }
    }
})