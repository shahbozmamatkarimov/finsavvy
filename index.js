document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".materials .list div");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.2}s`; // Har biri 0.2s farq bilan chiqadi
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active"); // Tepaga qaytganda class o‘chadi
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
