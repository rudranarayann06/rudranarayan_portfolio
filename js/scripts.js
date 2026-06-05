function toggleMenu() {

    document
        .getElementById("fullscreenMenu")
        .classList
        .toggle("active");

    window.addEventListener("scroll", function () {

        const navbar = document.querySelector(".custom-navbar");

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });
}

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / 80;

                if (count < target) {

                    count += increment;

                    counter.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText =
                        target + "+";
                }
            };

            update();

            observer.unobserve(counter);
        }
    });

}, { threshold: 0.5 });

counters.forEach(counter => {
    observer.observe(counter);
});

const card = document.querySelector(".skills-card");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY =
        ((x / rect.width) - 0.5) * 10;

    const rotateX =
        ((y / rect.height) - 0.5) * -10;

    card.style.transform =
        `perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
});

