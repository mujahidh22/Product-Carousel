const slider = document.querySelector(".img-slider")
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideIcons = document.querySelectorAll("slide-icon");

const numberOfSlides = slides.length;
var slideNumber = 0;

//slider for next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//slider for previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//for autoplay navigation
var playslider;
var repeater = () => {
    playslider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000)
}
repeater();

//stop the autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playslider);
});

//start the image slider autoplay again
slider.addEventListener("mouseout", () => {
    repeater();
});