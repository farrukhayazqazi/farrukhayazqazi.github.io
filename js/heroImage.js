lazyload();
window.onload = document.getElementById("loading").style.visibility = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
    var themeButton = document.getElementById("theme-btn");
    themeButton.addEventListener("click", function() {
        var image = document.getElementById("my-image")
        image.src = image.src.includes('gx5Wx47Y6Xz_9MvrZfS9C0-') ? 'https://lh3.googleusercontent.com/d/1rlxPs4x1RjBSbHfdKMAW_5YCs9FxGIDB' : 'https://lh3.googleusercontent.com/d/1kmREhTIU_gx5Wx47Y6Xz_9MvrZfS9C0-'
    })
})