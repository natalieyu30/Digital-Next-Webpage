// SHOW MENU
const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-list');
const navHeader = document.querySelector('.nav-header')
// console.log(toggleBtn)
// console.log(navList)

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show-list');
  navHeader.classList.toggle('show-list')
})


// REMOVE MENU MOBILE WHEN CLICKED
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.addEventListener('click', () => {
  navList.classList.remove('show-list')
  })
);

// SCROLL - ACTIVE LINK
const sections = document.querySelectorAll('section');
console.log(sections);

function scrollActiveLink() {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop-85;
    // console.log(sectionTop)
    const SectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id')

  
    if (scrollY >= sectionTop && scrollY < sectionTop + SectionHeight) {
      document.querySelector(`#nav-list a[href='#${sectionId}']`).classList.add('active-link');
    } else {
      document.querySelector(`#nav-list a[href='#${sectionId}']`).classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActiveLink);

// SCROLL-TOP BTN
function scrollTop() {
  const scrollTop = document.querySelector('.scroll-top');
  const navbar = document.querySelector('.nav');
  if (this.scrollY >= 560) {
    scrollTop.classList.add('show-scrollTop');
    navbar.classList.add('scroll-show');
  } else {
    scrollTop.classList.remove('show-scrollTop');
    navbar.classList.remove('scroll-show');
  }
}
window.addEventListener('scroll', scrollTop);