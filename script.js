
// smooth locomotive scroll
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
loadLocomotiveScroll();
loadingAnimation();
movingCircle();
previewCircle();