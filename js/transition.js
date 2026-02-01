document.addEventListener("DOMContentLoaded",()=>{

 document.body.classList.add("page-enter");

 document.querySelectorAll(".link").forEach(link=>{
  link.addEventListener("click",e=>{
   e.preventDefault();
   const url = link.href;

   document.body.classList.add("page-exit");

   setTimeout(()=>{
    window.location = url;
   },400);
  });
 });

});
