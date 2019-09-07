$(() => {

    // ---     This section applies stars equal to the avg rating to each card ---
    let div = $(".card-place-rating")

    for (let index in div) {
        let rating = $(`#card-${index}-place-rating`).data("rating")

        for (let i = 0; i < rating; i++) {
            $(`#card-${index}-place-rating`).append(`<span style="color: #FFE066"><i class="fas fa-star"></i></span>`)
        }
    }
})