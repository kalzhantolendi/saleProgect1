document.addEventListener("DOMContentLoaded", function () {
    // Testimonial Slider
    const slider = document.querySelector(".testimonial-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const testimonials = document.querySelectorAll(".testimonial-card");
    let index = 0;
    const cardWidth = 300;
    const totalTestimonials = testimonials.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalTestimonials;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalTestimonials) % totalTestimonials;
        updateSlider();
    });

    setInterval(() => {
        index = (index + 1) % totalTestimonials;
        updateSlider();
    }, 3000);

    // Step Animations
    const steps = document.querySelectorAll(".step");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-up");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    steps.forEach(step => {
        observer.observe(step);
    });


    // Language Switcher
    const translations = {
        "kz": {
            "nav-home": "Басты бет",
            "nav-services": "Қызметтер",
            "nav-why-us": "Неге біз?",
            "nav-offers": "Жеңілдіктер",
            "nav-contact": "Контактілер",
            "hero-title": "Үйіңізді бізбен бірге таза ұстаңыз!",
            "btn-order": "Қазір тапсырыс беру"
        },
        "ru": {
            "nav-home": "Главная",
            "nav-services": "Услуги",
            "nav-why-us": "Почему мы?",
            "nav-offers": "Спецпредложения",
            "nav-contact": "Контакты",
            "hero-title": "Сделайте ваш дом чистым вместе с нами!",
            "btn-order": "Заказать сейчас"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll('.lang').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('selectedLang', lang);
    }

    document.getElementById('btn-kz').addEventListener('click', () => changeLanguage('kz'));
    document.getElementById('btn-ru').addEventListener('click', () => changeLanguage('ru'));

    const savedLang = localStorage.getItem("selectedLang") || "ru";
    changeLanguage(savedLang);

  // CTA Button Alert
const ctaButton = document.querySelector(".cta-button");

ctaButton.addEventListener("click", () => {
    alert("Акция активирована!");
    window.location.href = "./index2.html"; // Перенаправление после нажатия "ОК"
});


    // Running Text Effect
    function createRunningText() {
        const text = document.createElement("div");
        text.classList.add("running-text");
        text.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(text);
        setTimeout(() => text.remove(), 10000);
    }

    setInterval(createRunningText, 1000);
    

    // Scroll Reveal Animations
    window.sr = ScrollReveal();

    if (window.innerWidth < 768) {
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
    } else {
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
    }
});

// console.log('wqeqw')



const ctaButton = document.querySelector(".send");

ctaButton.addEventListener("click", () => {
    alert("Отправлено!");
    window.location.href = "index.html"; // Перенаправление после нажатия "ОК"
});






const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});








document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.className = "social-button";
    button.innerHTML = "✉";
    document.body.appendChild(button);

    const menu = document.createElement("div");
    menu.className = "social-menu";
    menu.innerHTML = `
        <a href="https://wa.me/701976777" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp"></a>
        <a href="https://www.instagram.com/taza_line_/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"></a>
        <a href="https://t.me/FAMILYBCLEANING" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram"></a>
        
    `;
    document.body.appendChild(menu);

    button.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
    });

    document.addEventListener("click", function (event) {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("show-menu");
        }
    });
});























