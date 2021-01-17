const navClick = document.querySelector('.worlds');
const backdrop = document.querySelector('.backdrop');

navClick.addEventListener('click', () =>{
  document.querySelector('.langModal').classList.toggle('hide');
  document.querySelector('.backdrop').classList.toggle('hide');
})
backdrop.addEventListener('click', () =>{
  document.querySelector('.langModal').classList.add('hide');
  document.querySelector('.backdrop').classList.add('hide');
})