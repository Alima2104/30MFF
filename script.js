var overlay = document.querySelector('.overlay');

function myFunction(x) {
  //x.classList.toggle("change");
  overlay.style.display = "block";
}

overlay.addEventListener('click', function(){
  overlay.style.display = "none";
});


const progress = document.querySelector('.progress');
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progressWidth = Math.floor(100 * scroll / height);
progress.style.width = `${progressWidth}%`;
}, { passive: true })




//
// function myFunction(x) {
//   x.classList.toggle("change");
//   overlay.style.display = "none";
// }

// overlay.addEventListener('click', function(){
//   overlay.style.display = "none";
//   x.classList.toggle("change");
// });
