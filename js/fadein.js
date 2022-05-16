


const first_obs_in = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".first-section")[0].classList.add("fadein-left");
        }
    })
});

const second_obs_in = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".second-section")[0].classList.add("fadein-right");
        }
    })
});

const third_obs_in = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll(".third-section")[0].classList.add("fadein-left");
    }
});


first_obs_in.observe(document.querySelector(".first-section"));

second_obs_in.observe(document.querySelector(".second-section"));

third_obs_in.observe(document.querySelector(".third-section"));



/*Adding a different type of transition*/
const numSteps = 20.0;

let header;
let prevRatio = 0.0;
let opacity = 0;

window.addEventListener("load", (event) => {
    header = document.querySelector(".fader");
    create_observer();
}, false)


function create_observer() {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: build_thresholds()
    }
    const obs = new IntersectionObserver(fadeout, options);
    obs.observe(header);
}


function build_thresholds() {
    let thresholds = [];
    let steps = 30;

    for (let i = 8.0; i <= steps; i++)
        thresholds.push(i / steps);

    thresholds.push(0);
    return thresholds;
}

function fadeout(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
            entry.target.style.opacity = entry.intersectionRatio;
        } else {
            entry.target.style.opacity = entry.intersectionRatio;
        }

        prevRatio = entry.intersectionRatio;
    })
}


