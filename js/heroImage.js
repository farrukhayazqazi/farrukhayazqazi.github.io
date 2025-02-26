// lazyload();
// window.onload = document.getElementById("loading").style.visibility = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
    var themeButton = document.getElementById("toggle-theme-btn");



    themeButton.addEventListener("click", function() {
        console.log('theme changed');
        console.log('themeButton.checked:: ', themeButton.checked)

        const image1 = document.getElementById("image-1");
        console.log('image1; ', image1);
        const image2 = document.getElementById("image-2");
        console.log('image2: ', image2);

        if (themeButton.checked) {
            // Fade out image1, fade in image2
            image1.classList.add("hidden");
            image2.classList.remove("hidden");
        } else {
            // Fade out image2, fade in image1
            image2.classList.add("hidden");
            image1.classList.remove("hidden");
        }
    });










    // themeButton.addEventListener("click", function() {
    //     console.log('theme changed');
    //     var image = document.getElementById("my-image")
    //     image.src = themeButton.checked ? 'https://lh3.googleusercontent.com/d/1rlxPs4x1RjBSbHfdKMAW_5YCs9FxGIDB' : 'https://lh3.googleusercontent.com/d/1kmREhTIU_gx5Wx47Y6Xz_9MvrZfS9C0-'
    // })
})