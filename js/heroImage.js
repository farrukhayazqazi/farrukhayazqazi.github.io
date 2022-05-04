document.addEventListener("DOMContentLoaded", function() {
    var themeButton = document.getElementById("theme-btn");
    themeButton.addEventListener("click", function() {
        var image = document.getElementById("my-image")
        image.src = image.src.includes('roundbw') ? '/images/undraw/round.png' : '/images/undraw/roundbw.png'
    })
})