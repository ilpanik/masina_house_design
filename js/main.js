gsap.registerPlugin(ScrollTrigger);

if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
}

window.addEventListener("DOMContentLoaded", () => {
    const isNotMobile = window.matchMedia('(min-width: 768px)')
    const asscroll = setupASScroll();
    const isTouch = ('ontouchstart' in document.documentElement);
    const totalScroll = asscroll.containerElement.scrollHeight - innerHeight;

    ripplet.defaultOptions.color = 'rgb(255, 255, 255)';
    ripplet.defaultOptions.opacity = 0.5;
    // ripplet.defaultOptions.currentTarget = '.masina-btn';

    // ripplet({currentTarget: e.target.nextElementSibling}, {centered: true, opacity: .2})

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

    if (isNotMobile.matches) {
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
    }

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

    if (isNotMobile.matches) {
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
    }


    /* PROJECT DETAIL /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */


    gsap.to(".drop-section-second", {
        y: (i, target) => -totalScroll * target.dataset.speed,
        scrollTrigger: {
            scrub: true,
            trigger: ".drop-section"
        },
        ease: "none"
    });

    gsap.to(".combo-section-type-one--one", {
        // y: (i, target) => -totalScroll * target.dataset.speed,
        y: (i, target) => {
            let targetSpeed = Number(target.dataset.speed);
            return -totalScroll * (isNotMobile.matches ? targetSpeed + 0.1 : targetSpeed - 0.03);
        },
        scrollTrigger: {
            scrub: true,
            trigger: ".combo-section-type-one"
        },
        ease: "none"
    });

    gsap.to(".combo-section-type-two--one", {
        y: (i, target) => -totalScroll * target.dataset.speed,
        scrollTrigger: {
            scrub: true,
            trigger: ".combo-section-type-two"
        },
        ease: "none"
    });

    // gsap.to(".section-three-image-one", {
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".section-three",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    // });
    //
    // gsap.to(".section-three-image-two", {
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".section-three",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    // });
    //
    // gsap.to(".section-three-image-three", {
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".section-three",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    // });
    //
    // gsap.to(".section-four-image-one", {
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".section-four",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    // });
    //
    // gsap.to(".section-four-image-two", {
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".section-four",
    //         // start: "top bottom", // the default values
    //         // end: "bottom top",
    //         scrub: true
    //     },
    // });
    //todo tutto quello commentato è giusto, non ci sono double comments

    /* FINE PROJECT DETAIL /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

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

    // gsap.to(".img-1", {
    //     y: (i, target) => -totalScroll * target.dataset.speed,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".home-portfolio-mobile",
    //         scrub: true
    //     },
    // });

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
        btn.addEventListener("click", openEmailClient);
    }

    //todo @panik
    setTimeout(() => {
        document.querySelector('.home-container').classList.add('opacity-transition');
        document.querySelector('.fake-navbar').classList.add('opacity-transition');
        document.querySelector('.preview-section').classList.add('vertical-translate-off');
    }, 3500);

    if (isNotMobile.matches) {
        setTimeout(() => {
            document.querySelector('.preview-section').classList.add('hide-brute');
        }, 5500);
    } else {
        setTimeout(() => {
            document.querySelector('.preview-section').classList.add('hide-brute');
        }, 4000);
    }

    document.querySelector('.home-link').addEventListener("click", function () {
        window.location = '../';
    });

    // let projects = document.querySelectorAll('.portfolio .project');
    let projects = document.querySelectorAll('.img-hover-zoom');
    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener("click", function (e) {
            if (e.target.classList.contains('ev-carmen')) window.location = 'carmen';
            if (e.target.classList.contains('ev-villa')) window.location = 'abu-dhabi-villa';
            if (e.target.classList.contains('ev-boulevard-heights')) window.location = 'boulevard-heights';
            if (e.target.classList.contains('ev-al-manara')) window.location = 'al-manara';
            if (e.target.classList.contains('ev-palace')) window.location = 'abu-dhabi-palace';
            if (e.target.classList.contains('ev-bvlgari')) window.location = 'bvlgari';
            if (e.target.classList.contains('ev-jumeirah-palm')) window.location = 'jumeirah-palm';
            if (e.target.classList.contains('ev-marina')) window.location = 'marina';
            if (e.target.classList.contains('ev-saadiyat')) window.location = 'abu-dhabi-saadiyat';
            // else window.location = ''
            // console.log('project clicked', e.target.classList.contains('ev-marina'));
            // window.location = '../project-detail';
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
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px` //todo @panik fix offset top al click;
    circle.classList.add("ripple");

    // console.log('circle.style.width => ', circle.style.width)
    // console.log('circle.style.left => ', circle.style.left)
    console.log('event.clientY => ', event.clientY)
    console.log('button.offsetTop => ', button.offsetTop)
    console.log('radius => ', radius)
    console.log('(button.offsetTop + radius) => ', (button.offsetTop + radius))
    console.log('circle.style.top => ', circle.style.top)

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

function openEmailClient() {
    window.location.href = "mailto:info@masinaouse.com";
}

document.querySelector('.burger-menu-mobile').addEventListener("click", function () {
    console.log('menu clicked');
    document.querySelector('.full-menu').classList.add('opacity-transition-menu');
    document.querySelector('body').classList.add('scroll-hidden');
});

document.querySelector('.burger-menu').addEventListener("click", function () {
    console.log('menu clicked');
    document.querySelector('.full-menu').classList.add('opacity-transition-menu');
    document.querySelector('body').classList.add('scroll-hidden');
});

document.querySelector('.svg-close').addEventListener("click", function () {
    document.querySelector('.full-menu').classList.remove('opacity-transition-menu');
    document.querySelector('body').classList.remove('scroll-hidden');
});

document.querySelector('.ig-icon').addEventListener("click", function () {
    window.open('https://www.instagram.com/masina_house_design', '_blank');
});

document.querySelector('.fb-icon').addEventListener("click", function () {
    window.open('https://www.facebook.com/Masina-House-Design-343132932515577', '_blank');
});

document.querySelector('.linkedin-icon').addEventListener("click", function () {
    window.open('', '_blank');
});

document.querySelector('.home-link--detail').addEventListener("click", function () {
    window.location = '../../';
});

// function getRandomSize(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// var allImages = "";
//
// for (var i = 0; i < 25; i++) {
//     var width = getRandomSize(200, 400);
//     var height = getRandomSize(200, 400);
//     let img = document.createElement("img")
//     img.src = `https://placekitten.com/${width}/${height}`
//     // allImages += '<img src="https://placekitten.com/' + width + '/' + height + '" alt="pretty kitty">';
//     document.querySelector('#photos').append(img);
// }