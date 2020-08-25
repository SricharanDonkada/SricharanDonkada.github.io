

function openNav() {
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  const menu = document.querySelector('.nav-links');

  line1.classList.toggle('line1-close');
  line2.classList.toggle('line2-close');
  line3.classList.toggle('line3-close');
  menu.classList.toggle('nav-links-open');
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

window.onload = () => {
  // mouseFollower();
  new TypeIt('#hello', {
      speed: 150,
      loop: true
    }).type('HELLO!')
    .pause(1500)
    .delete(6)
    .pause(500)
    .type("NAMASTE!")
    .pause(1500)
    .delete(8)
    .pause(500)
    .type('HOLA!')
    .pause(1500)
    .delete(5)
    .pause(500)
    .type('CIAO!')
    .pause(1500)
    .delete(5)
    .pause(500)
    .type('OHAYO!')
    .pause(1500)
    .delete(6)
    .pause(500)
    .go();

  particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
};







//    MOUSE FOLLOWER

// function mouseFollower() {
//   var bee = document.getElementById("bee");
//   document.addEventListener("mousemove", getMouse);

//   console.log('follower method called!');
//   bee.style.position = "absolute"; //		
//   var beepos = {
//     x: 0,
//     y: 0
//   };

//   setInterval(followMouse(), 50);

//   var mouse = {
//     x: 0,
//     y: 0
//   }; //mouse.x, mouse.y

//   function getMouse(e){
//     mouse.x = e.pageX;
//     mouse.y = e.pageY;
//   }

//   function followMouse() {
//     //1. find distance X , distance Y
//     var distX = mouse.x - beepos.x;
//     var distY = mouse.y - beepos.y;
//     //Easing motion
//     //Progressive reduction of distance 
//     beepos.x += distX / 5;
//     beepos.y += distY / 2;
//     console.log(beepos);
//     bee.style.left = beepos.x + "px";
//     bee.style.top = beepos.y + "px";
//   }
// }