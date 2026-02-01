function go(id){
 document.getElementById(id).scrollIntoView({
  behavior:"smooth"
 });
}

/* SCROLL FADE */
const faders = document.querySelectorAll(".fade");

const io = new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){
   e.target.classList.add("show");
  }
 });
});

faders.forEach(el=>io.observe(el));
