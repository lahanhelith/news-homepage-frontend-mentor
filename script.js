const primaryNavigation = document.querySelector(".nav-bar");
const toggleBtn = document.querySelector(".mobile-nav-toggle");
const overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", () => {
    const isVisible = primaryNavigation.getAttribute("data-visible");

    if(isVisible === "false"){
        primaryNavigation.setAttribute("data-visible", "true");
        toggleBtn.setAttribute("aria-expanded", "true");
        overlay.setAttribute("data-visible", "true");
    }else if(isVisible === "true"){
        primaryNavigation.setAttribute("data-visible", "false");
        toggleBtn.setAttribute("aria-expanded", "false");
        overlay.setAttribute("data-visible", "false");
    }
})