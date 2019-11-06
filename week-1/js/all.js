let ham = document.querySelector('.ham');
let hideMenu = document.querySelector('.hideMenu');
let close = document.querySelector('.close');

ham.addEventListener('click', function () {
    hideMenu.classList.add('showhideMenu');
})

close.addEventListener('click', function(){
    hideMenu.classList.remove('showhideMenu');
})