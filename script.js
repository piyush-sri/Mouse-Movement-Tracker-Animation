var play=document.querySelector("#playbtn");
var container=document.querySelector("#container");
container.addEventListener("mouseenter",function(){
    gsap.to(play,{
      scale:1,
      opacity:1
    })
});
container.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0
    })
});
 
document.addEventListener("mousemove",function(dets){
    gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
});
