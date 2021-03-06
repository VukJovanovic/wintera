// Sidebar menu animations
const openNav = document.getElementById('mobile-navigation-button');
const closeNav = document.getElementById('sideBar-close-button');
const sideBar = document.querySelector('.sideBar-navigation');
const sideBarNavList = document.getElementById('sideBar-navList');
const socialLinks = document.querySelector('.social-links');
const sideBarOverlay = document.querySelector('.sideBar-overlay');

function showMenu(e) {
    e.preventDefault();
    TweenMax.to(openNav, .5, { display: 'none', opacity: 0 });
    TweenMax.to(sideBarOverlay, .5, { display: 'block', opacity: 1, delay: .9 });

    if (screen.width <= 450) {
        TweenMax.to(sideBar, .5, { display: 'flex', opacity: 1, width: '30rem', delay: .5 });
    } else {
        TweenMax.to(sideBar, .5, { display: 'flex', opacity: 1, width: '40rem', delay: .5 });
    }
    TweenMax.to(closeNav, .3, { opacity: 1, display: 'block', delay: .8 });
    TweenMax.to(sideBarNavList, .5, { opacity: 1, delay: 1 });
    TweenMax.to(socialLinks, .6, { opacity: 1, delay: 1.2 });
}

function closeMenu(e) {
    e.preventDefault();
    TweenMax.to(socialLinks, .3, { opacity: 0 });
    TweenMax.to(sideBarNavList, .3, { opacity: 0, delay: .2 });
    TweenMax.to(closeNav, .3, { display: 'none', opacity: 0, delay: .4 });
    TweenMax.to(sideBar, .5, { display: 'none', opacity: 0, width: 0, delay: .6 });
    TweenMax.to(sideBarOverlay, .5, { display: 'none', opacity: 0, delay: .6 });
    TweenMax.to(openNav, .5, { display: 'block', opacity: 1, delay: .8 });
}

openNav.addEventListener('click', showMenu);
closeNav.addEventListener('click', closeMenu);
sideBarOverlay.addEventListener('click', closeMenu);

