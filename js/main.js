document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('collapse');
  });
  navbarCollapse.classList.toggle('collapse');
  navbarCollapse.classList.toggle('show');
  navLinks.forEach(link => {
    link.classList.add('yellow'); 
  });
  