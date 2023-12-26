const burgerBtn = document.querySelector('.nav__burger');
const menuBurger = document.querySelector('.nav__menu');
const body = document.body; 

burgerBtn.addEventListener('click', function(){
	burgerBtn.classList.toggle('active');
	menuBurger.classList.toggle('active');
    body.classList.toggle('no-scroll');
})

menuBurger.querySelectorAll('.nav__menu-link').forEach(link => {
    link.addEventListener('click', () => {
        menuBurger.classList.remove('active');
        burgerBtn.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Anchor 
const anchor = document.querySelectorAll(".nav__menu a");

anchor.forEach(anc => {
    anc.addEventListener("click", function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});  


