// toggle icon navbar/ humberger button
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scrollreveall 
ScrollReveal({ reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-conten, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .skill-container, .portofolio-box, .contact-form', { origin:'buttom'});
ScrollReveal().reveal('.home-conten h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-conten p, .about-content', { origin:'top'});
// typrd js
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer !','Android Devloper !','Graphic Designer !','IOS Developer !','Student IDN BOARDING SCHOOL'],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,

});

