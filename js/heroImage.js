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
            image1.classList.add("hidden");
            image2.classList.remove("hidden");
        } else {
            image2.classList.add("hidden");
            image1.classList.remove("hidden");
        }
    });


    //    Image 1 --> 'https://lh3.googleusercontent.com/d/1rlxPs4x1RjBSbHfdKMAW_5YCs9FxGIDB'
    //    Image 2 --> 'https://lh3.googleusercontent.com/d/1kmREhTIU_gx5Wx47Y6Xz_9MvrZfS9C0-'

})