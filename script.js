
// animations on pageone using gsap
function animatePage1(){    
    var tl = gsap.timeline();
    tl.from("#pageone h1", {
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.3
    })

    tl.from("#imagecontainer img", {
        y: 10,
        opacity: 0,
        duration: 0.8
    })
}

// calling functions
animatePage1();