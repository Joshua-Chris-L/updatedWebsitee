const fileInput = document.querySelector("input");
downloadBtn = document.querySelector(".cv_button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    fetchFile("https://www.dropbox.com/scl/fi/isaxbz2azs9houphewgrf/CurriculumVitae.pdf?rlkey=uupou4cnyivy1wn2xz3ea4p1n&dl=0")
    
});

function fetchFile(url){
    let aTag = document.createElement("a");
    aTag.href = url;
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}

// Carousel 
const slides = document.querySelectorAll(".content_1")
const slider = document.querySelector(".slider")
const btnLeft = document.querySelector(".left_carousel")
const btnRight = document.querySelector(".right_carousel")
const dotContainer = document.querySelector(".dots")

let curSlide = 0;
let maxSlide = slides.length;
slider.style.overflow = "hidden";

//slider.style.transform = "scale(0.5) translateX(-40vh)"
//slides.forEach(  (s, i) => s.style.transform = 
//    `translateX(${70 * i}vh)`
//)

const createDots = function(){
    slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML('beforeend', 
        `<button class="dots__dot" data-slide="${i}"></button>`)
    })
}
createDots()

const activateDots = function(slide){
    document.querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add(
    'dots__dot--active');
}

const moveSlide = function(curSlide){
    slides.forEach(  (s, i) => s.style.transform = 
    `translateX(${70 * (i - curSlide)}vh)`)
}

moveSlide(0)

const nextSlide = function(){
    if (curSlide === maxSlide - 1) {
        curSlide = 0
    }else {
        curSlide++;
    } 
    moveSlide(curSlide)
    activateDots(curSlide);
}

const prevSlide = function(){
    if (curSlide === 0) {
        curSlide = maxSlide - 1
    }else{
        curSlide--;
    }
   
    moveSlide(curSlide);
    activateDots(curSlide);
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener("click", prevSlide)

document.addEventListener("keydown", function(e){
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
})

dotContainer.addEventListener('click', function(e){
    if (e.target.classList.contains('dots__dot')) {
        const {slide} = e.target.dataset;
        moveSlide(slide)
        activateDots(slide)
    }
})