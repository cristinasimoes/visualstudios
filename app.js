var arrowRight = document.getElementById('arrowRight');
var arrowLeft = document.getElementById('arrowLeft');
var arrowRight2 = document.getElementById('arrowRight2');
var arrowLeft2 = document.getElementById('arrowLeft2');
const slides = document.querySelectorAll('.slide');
const slides2 = document.querySelectorAll('.slide2');
const auto = true;
const intervalTime = 9000;
let slideInterval;
const auto2 = true;
const intervalTime2 = 9000;
let slideInterval2;
var navLink = document.querySelectorAll('.nav-link');
// navigation

// SECTION SLIDE - ARROWS
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling && current.nextElementSibling.classList != 'arrow'){
        current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const nextSlide2 = () => {
    const current2 = document.querySelector('.current2');
    current2.classList.remove('current2');
    if(current2.nextElementSibling && current2.nextElementSibling.classList != 'arrow2'){
        current2.nextElementSibling.classList.add('current2');
    }else{
        slides2[0].classList.add('current2');
    }
    setTimeout(() => current2.classList.remove('current2'));
}
const prevSlide2 = () => {
    const current2 = document.querySelector('.current2');
    current2.classList.remove('current2');
    if(current2.previousElementSibling){
        current2.previousElementSibling.classList.add('current2');
    }else{
        slides2[slides2.length -1].classList.add('current2');
    }
    setTimeout(() => current2.classList.remove('current2'));
}
arrowRight.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
arrowLeft.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
};

arrowRight2.addEventListener('click', e => {
    nextSlide2();
    if(auto2){
        clearInterval(slideInterval2);
        slideInterval2 = setInterval(nextSlide2, intervalTime2);
    }
});
arrowLeft2.addEventListener('click', e => {
    prevSlide2();
    if(auto2){
        clearInterval(slideInterval2);
        slideInterval2 = setInterval(nextSlide2, intervalTime2);
    }
});
if(auto2){
    slideInterval2 = setInterval(nextSlide2, intervalTime2);
};
function cleanUnderline(link1,link2,link3,link4){
    
    link1.style.textDecoration= "none";
    link2.style.textDecoration= "none";
    link3.style.textDecoration= "none";
    link4.style.textDecoration= "none";


}
navLink[0].addEventListener('click', function(){
    this.style.textDecoration= "underline";
    cleanUnderline(navLink[1],navLink[2],navLink[3],navLink[4]);

});
navLink[1].addEventListener('click', function(){
    this.style.textDecoration= "underline";
    cleanUnderline(navLink[0],navLink[2],navLink[3],navLink[4]);

});
navLink[2].addEventListener('click', function(){
    this.style.textDecoration= "underline";
    cleanUnderline(navLink[0],navLink[1],navLink[3],navLink[4]);

});
navLink[3].addEventListener('click', function(){
    this.style.textDecoration= "underline";
    cleanUnderline(navLink[0],navLink[1],navLink[2],navLink[4]);

});
navLink[4].addEventListener('click', function(){
    this.style.textDecoration= "underline";
    cleanUnderline(navLink[1],navLink[2],navLink[3],navLink[0]);

});
