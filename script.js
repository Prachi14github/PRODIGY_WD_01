window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.backgroundColor = "#ffffff";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "#f4b3a6";
  }
}
