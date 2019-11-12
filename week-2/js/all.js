// reruest 1
const headline = document.querySelector('.headline');
headline.addEventListener('click',function(e){
    e.preventDefault();
    let changeh1 = headline.textContent;    
    if(changeh1.includes('Welcome')) {
        headline.textContent = 'Have A Good Time!';
    } else {
        headline.textContent = 'Welcome!';
    }    
});


// Request 2
const menuTrigger = document.querySelector('.main-nav-trigger');
const toggleMenu = document.querySelector('.toggleMenu');
const close = document.querySelector('.close');

menuTrigger.addEventListener('click',function(e) {
    e.preventDefault();
    toggleMenu.classList.add('active');
});

close.addEventListener('click',function(e){
    e.preventDefault();
    toggleMenu.classList.remove('active');
})

//request 3
const button = document.querySelector('.button');
const hide = document.querySelector('.hide');
button.addEventListener('click',function(e){
    e.preventDefault();
    hide.style.display = 'block';
})



