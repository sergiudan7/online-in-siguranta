// Smooth scroll pentru linkurile din meniu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        const navList = document.querySelector('nav ul');
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });
});


window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                const headerOffset = 80;
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }, 100); // Poți crește puțin dacă layout-ul are delay mai mare
        }
    }
});




// Efect de schimbare a culorii header-ului la scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Efect de apariție pentru secțiuni la scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});
const searchToggle = document.querySelector('.search-toggle');
const searchForm = document.querySelector('.mobile-search-form');

searchToggle.addEventListener('click', () => {
    searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
});

// Închide meniul când dai click/tap în afara lui

document.addEventListener("click", function (event) {
    const menu = document.querySelector("nav ul");
    const toggleButton = document.querySelector(".menu-toggle");
    const searchForm = document.querySelector(".mobile-search-form");
    const searchToggleBtn = document.querySelector(".search-toggle");

    const clickedInsideMenu = menu.contains(event.target);
    const clickedToggle = toggleButton.contains(event.target);
    const clickedInsideSearch = searchForm.contains(event.target);
    const clickedSearchButton = searchToggleBtn.contains(event.target);

    // Închide meniul dacă e deschis și ai dat click în afara lui
    if (menu.classList.contains("show") && !clickedInsideMenu && !clickedToggle) {
        menu.classList.remove("show");
    }

    // Închide formularul de căutare dacă ai dat click în afară
    if (searchForm.style.display === "block" && !clickedInsideSearch && !clickedSearchButton) {
        searchForm.style.display = "none";
    }
});




document.addEventListener("click", function (event) {
    const mobileSearchForm = document.querySelector(".mobile-search-form");
    const searchToggleBtn = document.querySelector(".search-toggle");

    const clickedInsideSearch = mobileSearchForm.contains(event.target);
    const clickedSearchButton = searchToggleBtn.contains(event.target);

    if (
        mobileSearchForm.style.display === "block" &&
        !clickedInsideSearch &&
        !clickedSearchButton
    ) {
        mobileSearchForm.style.display = "none";
    }
});


    