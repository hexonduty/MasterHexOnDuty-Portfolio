// const elements = document.querySelectorAll('.animate__animated');

// window.addEventListener('scroll', function () {
//     animateElements();
// });

// function animateElements() {
//     for (let i = 0; i < elements.length; i++) {
//         const position = elements[i].getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         if (position < windowHeight) {
//             elements[i].classList.add('animate__fadeInUp');
//         } else {
//             elements[i].classList.remove('animate__fadeInUp');
//         }
//     }
// }

const scroll = document.querySelectorAll(".animate__animated");

window.addEventListener("scroll", function () {
  animateElements();
});

function animateElements() {
  for (let i = 0; i < scroll.length; i++) {
    const position = scroll[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight) {
      scroll[i].classList.add("animate__fadeInRight");
    } else {
      scroll[i].classList.remove("animate__fadeInRight");
    }
  }
}


