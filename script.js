let crs =  document.querySelector("#cursor")

document.addEventListener("mousemove", function(dets){

    crs.computedStyleMap.left = dets.x+"px"
    crs.computedStyleMap.top = dets.y+"px"
})



gsap.to("#nav",{
    backgroundColor: "000",
    height: "120px",
    duration: 0.5,
    scrolltrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "",
    scrolltrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -50%",
        end: "top -100vh",


    }
})