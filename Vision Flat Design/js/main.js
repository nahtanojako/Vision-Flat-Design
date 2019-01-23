(function(){

  let navbarToggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');
  let navbar = document.querySelector('.navbar');
  let navbarList = document.querySelectorAll('.list-item');

  /*
  // Set active class in the list that is clicked using for loop
  for (var i = 0; i < navbarList.length; i++) {
    navbarList[i].onclick = function() {

      var firstElement = navbarList[0];
      while(firstElement) {
        if(firstElement.tagName === 'LI') {
          firstElement.classList.remove('active');
        }
        firstElement = firstElement.nextSibling;
      }
      this.classList.add('active');
    }
  }
  */

  // Set active class in the list that is clicked using forEach()
  navbarList.forEach((listItem) => {
    listItem.onclick = function() {

      let firstItem = navbarList[0];
      while(firstItem){
        if(firstItem.tagName === 'LI') {
          firstItem.classList.remove('active');
        }
        firstItem = firstItem.nextSibling;
      }

      this.classList.add('active');
    }
  })

  // Show Navbar Links
  function slideDown() {
    navbarCollapse.classList.toggle('slideDown');
    navbarToggler.classList.toggle('bg-toggler');
  }

  // Navbar stay on top
  function navFixed() {
    let topOffset = window.pageYOffset;
    let heroSection = document.querySelector('#hero-section');
    let ctaTopOffset = document.querySelector('#cta').offsetTop;
    let toTop = document.querySelector('#to-top');


    if (topOffset >= 100) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }

    // Parallax Effect - Moving Background
    heroSection.style.backgroundPositionY = topOffset * 0.7 + 'px';

    // Show #to-top button 
    if (topOffset >= ctaTopOffset) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }

  }

  navbarToggler.addEventListener('click', slideDown)
  window.addEventListener('scroll', navFixed)

})()