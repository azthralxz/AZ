window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("bgm").play().catch(() => {});
  }, 2000);
};

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
