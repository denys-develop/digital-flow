window.onscroll = function showNav() {
    const nav = document.querySelector('.nav');
    const logoWhite = document.querySelector('.nav__logo--white');
    const logoBlack = document.querySelector('.nav__logo--black');

    const spanBlack = document.querySelectorAll('.nav__burger span');
    

    if(window.pageYOffset > 200) {
        nav.classList.add('nav__fixed');
        logoBlack.classList.add('hide')
        logoWhite.classList.remove('hide')   
        
        spanBlack.forEach(el => {
            el.classList.add('span--white')
        });
    } else {
        nav.classList.remove('nav__fixed');
        logoBlack.classList.remove('hide')
        logoWhite.classList.add('hide')

        spanBlack.forEach(el => {
            el.classList.remove('span--white')
        });
    }
}



