const ballsDiv = document.querySelector('.balls-div');



gsap.to(ballsDiv, { 
   duration: 1, 
   delay: 1,
   ease: 'power2.in', 
   scrollTrigger: {
      trigger: ballsDiv, 
      start: 'top center', 
   },
});


gsap.to(".animation-musk", {
   y: "50px",
   repeat: -1, 
   yoyo: true,
   ease:"power2.linear"

})
gsap.from(".animation-toys", {
   x: "1200px",
   duration: 3,
   delay: 1,
   yoyo: true,
   rotate: 360,
   ease: "elastic.out(1, 0.6)",

})

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');


const timeline = gsap.timeline();

// Add animations to the timeline
timeline
   .to(box1, { y: -100, duration: 1, repeat: -1, ease: 'power2.inOut', yoyo: true })
   .to(box2, { y: -200, duration: 1, repeat: -1, ease: 'power2.inOut', yoyo: true }) // Starts 0.5 seconds before the previous animation ends
   .to(box3, { y: -300, duration: 1, repeat: -1, ease: 'power2.inOut', yoyo: true }) // Starts 0.5 seconds before the previous animation ends


