document.addEventListener("DOMContentLoaded", function(event) {
  // hamburger menu
  const windowWidth = window.innerWidth;
  const body = document.querySelector('body');
  const menuBtn = body.querySelector('.btn--hamburger');
  const menuWrapper = body.querySelector('.nav');
  const headerLinks = menuWrapper.querySelectorAll('.nav-list__link');
  // show navigation on scroll
  const headerStyle = getComputedStyle(menuWrapper)
  const headerHeight = parseInt(headerStyle.height.slice(0, -2));
  const sections = document.querySelectorAll("section[id]");

  const hamburgerToggle = () => {
    menuBtn.classList.toggle('is-active');
    menuWrapper.classList.toggle('is-active');
    // menuWrapper.classList.remove('is-fixed');
    body.classList.toggle('menu-is-active');
  }
  const mediaCheck = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      menuBtn.addEventListener('click', hamburgerToggle)
      if(!window.scrollY || window.scrollY===0) {
        menuWrapper.classList.add("gradient");
      }
    } else {
      menuBtn.removeEventListener('click', hamburgerToggle)
      menuWrapper.classList.remove("gradient");
      menuWrapper.classList.remove("is-active");
      menuBtn.classList.remove("is-active");
      body.classList.remove('menu-is-active');
    }
  }
  mediaCheck();
  window.onresize = mediaCheck;

  headerLinks.forEach((link) => {
    link.addEventListener('click', function() {
        if (window.matchMedia("(max-width: 768px)").matches) {
          menuWrapper.classList.remove("is-active")
          menuWrapper.classList.remove("scroll-up")
          menuBtn.classList.remove("is-active")
          body.classList.remove('menu-is-active');
      }
    })
  })


  
  
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
          
        }
      } else {
        menuWrapper.classList.remove("is-fixed");
      }
    } else {
      menuWrapper.classList.remove("scroll-up");
      menuWrapper.classList.remove("is-fixed");
      if (windowY > windowH) {
        menuBtn.classList.add("is-fixed");
        menuWrapper.classList.remove("gradient");
      } else {
        menuBtn.classList.remove("is-fixed");
        menuWrapper.classList.add("gradient");
      }
    }

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
        menuWrapper.querySelector(".nav-list__link[href*=" + sectionId + "]").classList.add("active");
      } else {
        menuWrapper.querySelector(".nav-list__link[href*=" + sectionId + "]").classList.remove("active");
      }
    });        
  };
  
  window.addEventListener("scroll", throttle(validateHeader, 100));


  // Open text after choose question
  const faqName = body.querySelectorAll('.faq__name');
  faqName.forEach(function (item, index) {
    item.addEventListener ('click', function () {
      faqName.forEach((item2, index2) => {
        if (index2 !== index) {
          item2.classList.remove('is-active');
          // item2.parentElement.classList.remove('is-active');
        }
      })
      this.classList.toggle('is-active');
      // this.parentElement.classList.toggle('is-active');
      // let textExpansion = this.parentElement.querySelector('.faq__text');

      // let prevHeihgt = textExpansion.style.height
      // textExpansion.style.height = "auto";
      // let endHeight = getComputedStyle(textExpansion).height;
      // textExpansion.style.height = prevHeihgt;
      // textExpansion.offsetHeight;
      // textExpansion.style.transition = 'height .5s ease-in-out';
      // textExpansion.style.height = endHeight;
      // textExpansion.addEventListener('transitionend', function transitionEnd(event) {
      //   if (event.propertyName == 'height') {
      //     textExpansion.style.transition = ''
      //     textExpansion.style.height = 'auto'
      //     textExpansion.removeEventListener('transitionend', transitionEnd, false)
      //   }
      // }, false)
      
      // console.log(prevHeihgt)
      // console.log(getComputedStyle(textExpansion).height);
      // console.log(textExpansion.offsetHeight);
      
      
      
      
    
    })
  })
  
});