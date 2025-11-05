// Add smooth in-page jumping support
// Usage: <a class="jump-in-page" data-target="top">xxxx</a>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".jump-in-page").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.dataset.target;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});