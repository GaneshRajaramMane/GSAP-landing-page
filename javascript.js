gsap.from("#nav h4",{
  y:-50,
  duration:1,
  delay:0.5,
  opacity:0,
  stagger:0.3
})

gsap.from("#main h1",{
  x:-400,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.2
})
var tl=gsap.timeline();

tl.from("img",{
  x:100,
  rotate:45,
  opacity:0,
  duration:2,
  delay:1,
  stagger:0.1
})


tl.to("#img2",{
  rotate:12,
  
})
tl.to("#img3",{
  rotate:20,
})