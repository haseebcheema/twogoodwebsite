
// smooth locomotive scroll
function loadLocomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

// locomotive scroll + scrollTrigger
// scrollTrigger does not work with locomotiveScroll so we will use this code
function locomotivePlusScrollTrigger(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

// preview and hide navright links
function animateLinks(){
    gsap.to("#nav #links",{
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#hero",
            scroller: "#main",
            start: "top 0%",
            end: "top -5%",
            scrub: true
        }
    });
}

// animations on hero using gsap
function loadingAnimation(){    
    var tl = gsap.timeline();

    // animation on nav
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        delay: 0.6,
        duration: 0.8
    })

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

// moving circle with cursor
function movingCircle(){
    var cursor = document.querySelector("#cursor");
    document.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            top: dets.clientY,
            left: dets.clientX
        });
    });
}

// preview circle on products page
function previewCircle(){
    var items = document.querySelectorAll("#items");
    
    items.forEach(function(i){
        
        // preview when hover on items
        i.addEventListener("mouseenter", function(){
            gsap.to("#cursor", {
                transform: "translate(-50%, -50%) scale(1)"
            });
        });

        // undo preview when hover on items
        i.addEventListener("mouseleave", function(){
            gsap.to("#cursor", {
                transform: "translate(-50%, -50%) scale(0)"
            });
        });
    });
}

// calling functions
// loadLocomotiveScroll();
locomotivePlusScrollTrigger();
loadingAnimation();
animateLinks();
movingCircle();
previewCircle();