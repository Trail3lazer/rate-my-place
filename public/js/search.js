$(()=>{

// ---     This section applies stars equal to the avg rating to each card ---

    let div = $(".rating")
    for (let index in div) {
    let rating = $(`#${index}-rating`).data("rating")

    for (let i = 0; i < rating; i++){
    $(`#${index}-rating`).append(`<span style="color: #FFE066"><i class="fas fa-star"></i></span>`)
    }}
})