
function loadLocomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

// animations on hero using gsap
function loadingAnimation(){    
    var tl = gsap.timeline();

    // animation on headings
    tl.from("#hero h1", {
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.3
    })

    // animation on images
    tl.from("#imagecontainer img", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6
    })
}

// calling functions
loadLocomotiveScroll();
loadingAnimation();