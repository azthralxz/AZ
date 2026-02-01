/* Fade Scroll */

const faders = document.querySelectorAll(".fade");

const io = new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){
   e.target.classList.add("show");
  }
 });
});

faders.forEach(el=>io.observe(el));

/* Loader Hide */

window.addEventListener("load",()=>{
 setTimeout(()=>{
  document.querySelector(".loader-screen")?.classList.add("hide");
 },600);
});
