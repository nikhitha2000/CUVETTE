let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');
dayNight.addEventListener('click',Mode);
function Mode() {
    banner.classList.toggle("night");
}

let typing = new Typed("#text",{
    strings:["Computer science Engineer","Web Developer","Frontend Developer","Classical Dancer"],
    loop:true,
    typeSpeed :100,
    backSpeed:50,
    backDelay:1000
});