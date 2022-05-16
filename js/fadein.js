


const firstobs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".first-section")[0].classList.add("fadein-left");
        }
    })
});

firstobs.observe(document.querySelector(".first-section"));

const secondobs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".second-section")[0].classList.add("fadein-right");
        }
    })
});

secondobs.observe(document.querySelector(".second-section"));

const thirdobs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".third-section")[0].classList.add("fadein-left");
        }
    })
});

thirdobs.observe(document.querySelector(".third-section"));