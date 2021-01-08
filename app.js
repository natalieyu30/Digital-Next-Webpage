// SHOW MENU
const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-list');
// console.log(toggleBtn)
// console.log(navList)

toggleBtn.addEventListener('click', () => navList.classList.toggle('show-list'))


// REMOVE MENU MOBILE WHEN CLICKED
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.addEventListener('click', () => {
  navList.classList.remove('show-list')
  })
);