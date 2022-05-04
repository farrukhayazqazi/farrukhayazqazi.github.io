document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('my-image');
    img.src = '/images/undraw/round.jpg';
var themeButton = document.getElementById('theme-btn')


themeButton.addEventListener('click', function () {
    img.src = img.src == 'http://127.0.0.1:5500/images/undraw/roundbw.png' ? '/images/undraw/round.jpg' : '/images/undraw/roundbw.png';
})
});
