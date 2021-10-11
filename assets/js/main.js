/* =========================== SHOW ========================= */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            //we add the show-menu class to the div tag with nav__menu class

            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ======================== REMOVE MENU MOBILE =================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ======================== SCROLL SECTIONS ACTIVE LINK =================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ======================== CHANGE BACKGROUND HEADER =================== */
function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater tha 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ======================== SHOW SCROLL TOP =================== */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //when  the scroll is higher than 200 viewport, add the show-scroll class to the tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* ======================== DARK LIGHT THEME =================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

//previousely selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'


//we validate if the user previousely chose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}


//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
})


/* ======================== SCROLL REVEAL ANIMATION  =================== */
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.home__data, .home__img,
           .decoration__data, .accessory__content,
           .footer__content`,{
               origin: 'top',
               interval: 200
           })

sr.reveal(`.share__img, .send__content`,{
    origin: 'left',

})

sr.reveal(`.share__data, send__img`,{
    origin: 'right',
    
})