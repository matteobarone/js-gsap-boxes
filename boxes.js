console.log(gsap);

// document.addEventListener('DOMContentLoaded', () => {
//   gsap.to(".box", {
//     rotation: 3000,
//     x: 100,
//     duration: 3,
//     delay: 0.5,
//     repeat: 3,
//     stagger: 1,
//     yoyo: true,
//     ease: 'back'
//   });
// })

document.addEventListener('DOMContentLoaded', () => {
  gsap.to(".box", {
    rotation: 720,
    x: 100,
    duration: 3,
    repeat: 3,
    stagger: 0.1,
    yoyo: true,
  });
})
