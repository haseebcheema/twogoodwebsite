
// animations on pageone using gsap
function loadingAnimation(){    
    var tl = gsap.timeline();
    tl.from("#pageone h1", {
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.3
    })

    tl.from("#imagecontainer img", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6
    })
}

// calling functions
loadingAnimation();