gsap.registerPlugin(ScrollTrigger);

if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
}

window.addEventListener("DOMContentLoaded", () => {
    const isNotMobile = window.matchMedia('(min-width: 768px)')
    const asscroll = setupASScroll();
    const isTouch = ('ontouchstart' in document.documentElement);
    const totalScroll = asscroll.containerElement.scrollHeight - innerHeight;

    console.log(isNotMobile);
    // if (isNotMobile.matches) {
    //     document.querySelector('.home-start-mobile').style.display = 'none';
    //     document.querySelector('.home-about-mobile').style.display = 'none';
    //     document.querySelector('.home-portfolio-mobile').style.display = 'none';
    //     document.querySelector('.home-contacts-mobile').style.display = 'none';
    // }

    // gsap.to(".test1", {
    //     scrollTrigger: {
    //         pin: true,
    //         pinType: isTouch ? 'fixed' : 'transform',
    //         end: '200%',
    //         scrub: 0.2,
    //         trigger: ".home-about"
    //     },
    //
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //     ease: "power1.inOut"
    // });

    gsap.to(".home-about--inner-text", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".home-start",
            // start: "top top-=500px",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".abs-1", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".home-about",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".abs-2", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".home-about",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".abs-3", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".home-about",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".abs-4", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".home-about",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    // gsap.to(".home-portfolio--inner-text-container", {
    //     yPercent: -100,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".home-portfolio",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    // });

    gsap.to(".about-us-section-two--left img", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".about-us-section-two",
            // start: "100%", // the default values
            // end: "600%",
            scrub: true
        },
    });

    gsap.to(".about-us-section-three--right", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".about-us-section-three",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".about-us-section-four--left", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".about-us-section-four",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".section-two-image-two", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        scrollTrigger: {
            scrub: true,
            trigger: ".section-two"
        },

        ease: "none"
    });

    // gsap.to(".section-two-image-two", {
    //     // yPercent: -200,
    //     // ease: "none",
    //     scrollTrigger: {
    //         pin: true,
    //         pinType: isTouch ? 'fixed' : 'transform',
    //         trigger: ".project-detail .section .section-two",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    //     y: (i, target) => {
    //         console.log(totalScroll);
    //         console.log(target.dataset.speed);
    //         console.log(-totalScroll * target.dataset.speed);
    //         return -totalScroll * target.dataset.speed
    //     },
    //     ease: "none"
    // });

    gsap.to(".section-three-image-one", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".section-three",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".section-three-image-two", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".section-three",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".section-four-image-one", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".section-four",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    gsap.to(".section-four-image-two", {
        y: (i, target) => -totalScroll * target.dataset.speed,

        ease: "none",
        scrollTrigger: {
            trigger: ".section-four",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        },
    });

    // MOBILE STRICT SECTIONS PARALLAX

    gsap.to(".home-about-mobile-box", {
        y: (i, target) => -totalScroll * target.dataset.speed,
        ease: "none",
        scrollTrigger: {
            trigger: ".home-about-mobile",
            scrub: true,
            invalidateOnRefresh: true
        },
    });

    gsap.to(".img-1", {
        y: (i, target) => -totalScroll * target.dataset.speed,
        ease: "none",
        scrollTrigger: {
            trigger: ".home-portfolio-mobile",
            scrub: true
        },
    });

    gsap.to(".img-2", {
        y: (i, target) => -totalScroll * target.dataset.speed,
        ease: "none",
        scrollTrigger: {
            trigger: ".home-portfolio-mobile",
            scrub: true
        },
    });


    const masinaBtns = document.querySelectorAll(".masina-btn");
    console.log(masinaBtns);
    for (const btn of masinaBtns) {
        btn.addEventListener("click", createRipple);
    }

    //todo @panik
    setTimeout(() => {
        document.querySelector('.home-container').classList.add('opacity-transition');
        document.querySelector('.fake-navbar').classList.add('opacity-transition');
        document.querySelector('.preview-section').classList.add('vertical-translate-off');
    }, 3500);

    setTimeout(() => {
        document.querySelector('.preview-section').classList.add('hide-brute');
    }, 5000);

    document.querySelector('.home-link').addEventListener("click", function () {
        window.location = '../';
    });

    let projects = document.querySelectorAll('.portfolio .project');
    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener("click", function () {
            console.log('project clicked');
            window.location = '../project-detail';
        }, false);
    }
});


function setupASScroll() {
    // https://github.com/ashthornton/asscroll
    const asscroll = new ASScroll({
        disableRaf: true,
        // customScrollbar: true,
        // scrollbarEl: '.asscrollbar',
        // scrollbarHandleEl: '.asscrollbar-handle',
        // scrollbarStyles: true,
    });


    gsap.ticker.add(asscroll.update);

    ScrollTrigger.defaults({
        scroller: asscroll.containerElement
    });


    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
        scrollTop(value) {
            if (arguments.length) {
                asscroll.currentPos = value;
                return;
            }
            return asscroll.currentPos;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        fixedMarkers: true
    });


    asscroll.on("update", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", asscroll.resize);

    requestAnimationFrame(() => {
        asscroll.enable({
            newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")
        });

    });
    return asscroll;
}

function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const ripple = button.getElementsByClassName("ripple")[0];

    circle.style.position = 'absolute';
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    // circle.style.top = `${event.clientY - (button.offsetTop + radius)}px` todo @panik fix offset top al click;
    circle.classList.add("ripple");

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

document.querySelector('.ig-icon').addEventListener("click", function () {
    window.open('https://www.instagram.com/masina_house_design', '_blank');
});

document.querySelector('.fb-icon').addEventListener("click", function () {
    window.open('https://www.facebook.com/Masina-House-Design-343132932515577', '_blank');
});

document.querySelector('.linkedin-icon').addEventListener("click", function () {
    window.open('', '_blank');
});