import "./css/style.scss";

document.addEventListener("DOMContentLoaded", function(event) {
  const body = document.querySelector('body');
  const menuBtn = body.querySelector('.hamburger');
  const menuWrapper = body.querySelector('.header__inner');
  
  menuBtn.addEventListener('click', function (e) {
    menuBtn.classList.toggle('is-active');
    menuWrapper.classList.toggle('is-active');
    body.classList.toggle('menu-is-active');
  })

  const faqName = body.querySelectorAll('.faq__name');
  faqName.forEach(function (item, index) {
    item.addEventListener ('click', function () {
      faqName.forEach((item2, index2) => {
        // item2.classList.remove('is-active', index2 === index);
        if (index2 !== index) {
          item2.classList.remove('is-active');
        }
      })
      this.classList.toggle('is-active');
    })
  })

  
    
    const header = document.querySelector(".menu-top__wrapper");
    const headerStyle = getComputedStyle(header)
    const headerHeight = parseInt(headerStyle.height.slice(0, -2));
    const menuBtnStyle = getComputedStyle(menuBtn)
    const menuBtnHeight = parseInt(menuBtnStyle.top.slice(0, -2)) + parseInt(menuBtnStyle.height.slice(0, -2))
    const sections = document.querySelectorAll("section[id]");
    console.log(sections)
    
    // listening to scroll events greatly impacts performance because it fires too often. Especially on mobile devices, it fires like crazy. So, we want to add some threshold not to fire too many events. a 100ms delay of firing.
    
    const throttle = (func, time = 100) => {
      let lastTime = 0;
      return () => {
        const now = new Date();
        if (now - lastTime >= time) {
          func();
          time = now;
        }
      };
    };
    
    const validateHeader = () => {
      const windowY = window.scrollY;
      const windowH = window.innerHeight;
      if (window.matchMedia("(min-width: 769px)").matches) {
        if (windowY > windowH + headerHeight) {
          header.classList.add("scroll-up");
        } else {
          header.classList.remove("scroll-up");
        }
      } else {
        if (windowY > windowH + menuBtnHeight) {
          menuBtn.classList.add("is-fixed");
        } else {
          menuBtn.classList.remove("is-fixed");
        }
      }

       // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        console.log(sectionHeight)
        const sectionTop = current.offsetTop - 50;
        console.log(sectionTop)
        const sectionId = current.getAttribute("id");
        console.log(sectionId)

         /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */

        if (
          windowY > sectionTop &&
          windowY <= sectionTop + sectionHeight
        ){
          document.querySelector(".header__link[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector(".header__link[href*=" + sectionId + "]").classList.remove("active");
        }
      });        

      
    };
    
    window.addEventListener("scroll", throttle(validateHeader, 100));
  
});

// document.querySelectorAll(".header__link[href*=" + sectionId + "]").forEach( current => {current.classList.add("active");
