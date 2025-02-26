// for navbar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > window.innerHeight) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// for animation in hero section
// el script only runs after all elements loaded 
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('.typed', {
        strings: ["Larry Daniels", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 40,   
        backDelay: 1200, //wait 1700 then delete 
        startDelay: 500, 
        showCursor: false,
        loop: true
    });
});

// to filter el sections
document.addEventListener("DOMContentLoaded", function () {
    let filterButtons = document.querySelectorAll(".filter-btn");
    let portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.getAttribute("data-filter");
            
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            
            portfolioItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

// for slider
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop:true,
            autoplay: true,
            smartSpeed: 600,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            nav: false,
            dots: true
        });
    });
    
});

// for counter section
document.addEventListener("DOMContentLoaded", function () {
    function animateCounters() {
        const counters = document.querySelectorAll(".counter-content h3");
        const speed = 40;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-count");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkCounters() {
        const countersSection = document.querySelector(".counter");
        if (isElementInViewport(countersSection)) {
            animateCounters();
            window.removeEventListener("scroll", checkCounters); // make it runs once
        }
    }

    window.addEventListener("scroll", checkCounters);
    checkCounters();  // run lw el section in view
});