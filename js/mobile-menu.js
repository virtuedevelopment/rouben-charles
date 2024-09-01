document.querySelector('.toggle-button').onclick = function(e){
    var menu = document.querySelector('.mobile-menu');
    var btn = document.querySelector('.toggle-button');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}