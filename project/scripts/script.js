// Lightbox functionality for image gallery
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
  
    document.querySelectorAll(".lightbox-thumb").forEach(img => {
      img.addEventListener("click", function () {
        const fullImgSrc = img.getAttribute("data-full");
        lightboxImg.src = fullImgSrc;
        lightbox.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });
});
  
// nav menu hover effect
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".main-nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("mouseover", function () {
        this.style.color = "#cf8c33"; // Change color on hover
      });
  
      link.addEventListener("mouseout", function () {
        this.style.color = ""; // Reset color on mouse out
      });
    });
});
