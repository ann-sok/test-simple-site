import "./css/style.scss";

// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(this).toggleClass("is-active");
//   });
// });
console.log('before document load');

document.addEventListener("DOMContentLoaded", function(event) {
  const body = document.querySelector('body');
  const menuBtn = body.querySelector('.hamburger');
  const menuWrapper = body.querySelector('.header__inner');
  
  menuBtn.addEventListener('click', function (e) {
    menuBtn.classList.toggle('is-active');
    menuWrapper.classList.toggle('is-active');
    body.classList.toggle('menu-is-active');
  })
});
