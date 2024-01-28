let up = document.querySelector(".up");
window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY > 80) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};
