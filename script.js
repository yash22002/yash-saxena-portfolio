// CUSTOM CURSOR GLOW

const glow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    'section, .bento-card, .project-node, .skill-row'
);

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('show-animation');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// TYPING EFFECT
const typingText = document.querySelector('.intro-block h2');

const textArray = [
    "MCA Student & Backend Developer.",
    "PHP & Java Backend Specialist.",
    "Building scalable web applications.",
    "ServiceNow & Database Enthusiast."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = textArray[textIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex >= textArray.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();

// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.quick-nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove('active-link');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// PROJECT CARD PARALLAX EFFECT
const cards = document.querySelectorAll('.bento-card');

cards.forEach((card) => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 18);
        const rotateY = ((centerX - x) / 18);

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// FLOATING PARTICLE EFFECT
const body = document.body;

for (let i = 0; i < 25; i++) {

    const particle = document.createElement('span');

    particle.classList.add('particle');

    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration =
        (Math.random() * 10 + 8) + 's';

    particle.style.animationDelay =
        Math.random() * 5 + 's';

    body.appendChild(particle);
}




// BUTTON RIPPLE EFFECT
const buttons = document.querySelectorAll(
    '.btn-submit, .btn-resume'
);

buttons.forEach((btn) => {

    btn.addEventListener('click', function (e) {

        let ripple = document.createElement('span');

        ripple.classList.add('ripple');

        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// SMOOTH PAGE LOAD
window.addEventListener('load', () => {

    document.body.classList.add('loaded');
});
