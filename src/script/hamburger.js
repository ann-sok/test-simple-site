document.addEventListener("DOMContentLoaded", function(event) {
  // hamburger menu
  const body = document.querySelector('body');
  const menuBtn = body.querySelector('.hamburger');
  const menuWrapper = body.querySelector('.header__inner');
  
  if (window.matchMedia("(max-width: 768px)").matches) {
    menuBtn.addEventListener('click', function (e) {
      menuBtn.classList.toggle('is-active');
      menuWrapper.classList.toggle('is-active');
      body.classList.toggle('menu-is-active');
    })
  }

  // show navigation on scroll
  const headerStyle = getComputedStyle(menuWrapper)
  const headerHeight = parseInt(headerStyle.height.slice(0, -2));
  const menuBtnStyle = getComputedStyle(menuBtn)
  const menuBtnHeight = parseInt(menuBtnStyle.top.slice(0, -2)) + parseInt(menuBtnStyle.height.slice(0, -2))
  const sections = document.querySelectorAll("section[id]");
  const headerLinks = menuWrapper.querySelectorAll('.header__link');
  
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
      menuWrapper.classList.remove("gradient");
      if (windowY > windowH) {
        menuWrapper.classList.add("is-fixed");
        if (windowY > windowH + headerHeight) {
          menuWrapper.classList.add("scroll-up");
        } else {
          menuWrapper.classList.remove("scroll-up");
        }
      } else {
        menuWrapper.classList.remove("is-fixed");
      }
    } else {
      if (windowY > windowH + menuBtnHeight) {
        menuBtn.classList.add("is-fixed");
        menuWrapper.classList.remove("gradient");
      } else {
        menuBtn.classList.remove("is-fixed");
        menuWrapper.classList.add("gradient");
      }
    }

    headerLinks.forEach((link) => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        if(menuWrapper.classList.contains("is-active")) {
          menuWrapper.classList.remove("is-active")
          menuWrapper.classList.remove("scroll-up")
          menuBtn.classList.remove("is-active")
          body.classList.remove('menu-is-active');
        }
      }
    })

      // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight;
      const sectionId = current.getAttribute("id");

        /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */

      if (
        windowY > sectionTop &&
        windowY <= sectionTop + sectionHeight
      ){
        menuWrapper.querySelector(".header__link[href*=" + sectionId + "]").classList.add("active");
      } else {
        menuWrapper.querySelector(".header__link[href*=" + sectionId + "]").classList.remove("active");
      }
    });        
  };
  
  window.addEventListener("scroll", throttle(validateHeader, 100));

  // Open text after choose question
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
  
});