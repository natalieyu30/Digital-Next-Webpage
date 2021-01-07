const toggleBtn = document.querySelector('.toggle-btn');
const navList = document.querySelector('.nav-list');
console.log(toggleBtn)
console.log(navList)

// function toggleLsit() {
//   navList.classList.toggle('nav-list')
// }
toggleBtn.addEventListener('click', () => navList.classList.toggle('show-list'))
// toggleBtn.onclick = toggleLsit