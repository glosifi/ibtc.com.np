window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.rd-navbar');
    var brandImg = document.querySelector('.rd-navbar-brand img');
  
    // Check if the page is scrolled more than 50px
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  