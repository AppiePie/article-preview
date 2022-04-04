const mediaQuery = window.matchMedia("(max-width: 800px)");

// Call listener function at run time
querycheck(mediaQuery);
// Attach listener function on state changes

mediaQuery.addEventListener("change", querycheck);

function querycheck(x) {
  if (x.matches) {
    console.log("< 800px");
    const share = document.querySelectorAll(".right-footer");
    const socialMedia = document.querySelector(".social-media");
    const footer = document.querySelector(".footer");

    for (let s of share) {
      s.addEventListener("touchstart", handler, false);

      function handler(event) {
        socialMedia.classList.toggle("active");
        footer.classList.toggle("active");
        console.log("active");
      }
    }
  } else {
    console.log("> 800px");
    const share = document.querySelector(".footer .right-footer");
    const socialMedia = document.querySelector(".social-media");

    socialMedia.classList.remove("active");
    share.addEventListener("click", () => share.classList.toggle("active"));
  }
}
