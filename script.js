
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');


// function start(){
//     setTimeout(function(){
//         yellow.style.opacity=1;
//         red.style.opacity=0.3;
//         green.style.opacity=0.3;
//     },500)

//     setTimeout(function(){
//         yellow.style.opacity=0.3;
//         red.style.opacity=1;
//         green.style.opacity=0.3;
//     },500)

//     setTimeout(function(){
//         yellow.style.opacity=0.3;
//         red.style.opacity=0.3;
//         green.style.opacity=1;
//     },500)
// }
// start();

function start() {
    setTimeout(function () {
      yellow.style.opacity = 1;
      red.style.opacity = 0.3;
      green.style.opacity = 0.3;
  
      setTimeout(function () {
        yellow.style.opacity = 0.3;
        red.style.opacity = 1;
        green.style.opacity = 0.3;
  
        setTimeout(function () {
          yellow.style.opacity = 0.3;
          red.style.opacity = 0.3;
          green.style.opacity = 1;
  
          // Call start() again after a delay to create a loop
          setTimeout(start, 500);
        }, 2000);
      }, 2000);
    }, 2000);
  }
  
  // Call start() to initiate the traffic light sequence
  start();

