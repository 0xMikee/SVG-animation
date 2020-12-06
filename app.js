function refreshPage(){
    window.location.reload();
} 
var a1 = gsap.timeline ({defaults: {duration: .7, ease: Back.easeOut.config(2), opacity:0}})
var a2 = gsap.timeline ({defaults:{duration: 1.5, delay:1}})
a1.from(".card-bgr", {delay: 1, scale: .2, transformOrigin: "center"}, "=.2")
.from(".card-top", {scaleY:0, transformOrigin: "top"} )
.from(".i", {scale: .2, transformOrigin: "center"}, "-=.7" )
.from(".side-line", {scaleY:0}, "-=.2" )
.from(".line1", {scaleX:0}, "-=.2" )
.from(".line2", {scaleX:0, transformOrigin: "left"}, "-=.1" )
.from(".line3", {scaleX:0, transformOrigin: "left"}, "-=.2" )
.from(".line4", {scaleX:0, transformOrigin: "left"}, "-=.3" )
.from(".line5", {scaleX:0, transformOrigin: "left"}, "-=.4" )
.from(".btn1", {scaleX:0, transformOrigin: "left"}, "-=.5" )
.from(".btn2", {scaleX:0, transformOrigin: "left"}, "-=.6" )
a2.to(".card", {y: 15, repeat: -1, yoyo:true})
