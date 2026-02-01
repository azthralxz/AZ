const routes = {
  "/": "/pages/q1.html",
  "/q1": "/pages/q1.html",
  "/q2": "/pages/q2.html",
  "/q3": "/pages/q3.html",
  "/q4": "/pages/q4.html",
  "/q5": "/pages/q5.html",
  "/q6": "/pages/q6.html",
  "/q7": "/pages/q7.html",
  "/q8": "/pages/q8.html",
  "/q9": "/pages/q9.html",
  "/q10": "/pages/q10.html",
  "/q11": "/pages/q11.html",
  "/q12": "/pages/q12.html",
  "/q13": "/pages/q13.html",
  "/q14": "/pages/q14.html"
}

async function router(){

  const path = location.pathname
  const route = routes[path] || routes["/"]

  const html = await fetch(route).then(r=>r.text())

  const app = document.getElementById("app")

  app.classList.add("page-exit")

  setTimeout(()=>{
    app.innerHTML = html
    app.classList.remove("page-exit")
    app.classList.add("page-enter")
  },400)

}

window.addEventListener("popstate", router)
window.addEventListener("load", router)

function go(path){
  history.pushState({}, "", path)
  router()
}
