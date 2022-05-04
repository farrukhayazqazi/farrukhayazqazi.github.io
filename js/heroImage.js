// document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('my-image');
    img.src = '/images/undraw/round.jpg';
    // img.src = 'https://lh3.googleusercontent.com/d/1kmREhTIU_gx5Wx47Y6Xz_9MvrZfS9C0-';
var themeButton = document.getElementById('theme-btn')


themeButton.addEventListener('click', function () {
    console.log('imgsrc: ', img.src)
    // img.src = img.src == 'http://127.0.0.1:5500/images/undraw/roundbw.png' ? 'https://lh3.googleusercontent.com/d/1kmREhTIU_gx5Wx47Y6Xz_9MvrZfS9C0-' : 'https://lh3.googleusercontent.com/d/1rlxPs4x1RjBSbHfdKMAW_5YCs9FxGIDB';
    img.src = img.src.includes('.png') ? '/images/undraw/round.jpg' : '/images/undraw/roundbw.png';

})
// });
