var t1 = gsap.timeline();

t1.from('.parts',{ ease:'expo.inOut', duration:2, stagger:.2, x:30, opacity:0})
.from('#svgs h3',{ ease:'expo.inOut', duration:2, scale:2.0, y:20,  opacity:0})
.to('#svgs',{ ease:'expo.inOut', duration:1, stagger:.2,  delay:2, y:-120,  opacity:0})
.to('.parts',{ ease:'expo.inOut', duration:2, delay:1, y:'-100%',stagger:.2, opacity:0})
.to('#overlay',{ ease:'expo.inOut', duration:-2,  y:'-100%', opacity:0}) 
.from('#main', { ease:'expoinOut', duration:-2, opacity:0 , y:'100%'})
.from('#nav #left h3',{ ease:'expo.inOut', duration:.8, x:30, opacity:0})
.from('#nav #left a , #nav #right i',{ ease:'expo.inOut', duration:.5, delay:-.6,  stagger:.2, x:30, opacity:0})
.from('#scroll , #line',{ ease:'expo.inOut', duration:1, y:'100px', opacity:0})
.from('#text , #l1, l2' ,{ ease:'expo.inOut', duration:1, delay:-1,  y:'10%', opacity:0})
.from('#dets p', { duration:1, opacity:0, y:'10%', delay:-1,  ease:'expo.inOut',  })
.from('#links a', {ease:'expo.inOut', duration:2, stagger:.3,  x:'10%', opacity:0, delay:-1
})


// var t2 = gsap.timeline();

 