(function(){
    emailjs.init("K38a7ziEs5hC69Myf"); 
})();

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Pehle wala alert wala code hat gaya

    const btn = document.querySelector('.btn-submit');
    btn.textContent = 'Dispatching...';

    emailjs.sendForm('service_icjyqlo', 'template_i06cfyw', this)
        .then(function() {
            alert('Message dispatched successfully!');
            btn.textContent = 'Dispatch Message';
            contactForm.reset();
        }, function(error) {
            alert('Dispatch failed: ' + JSON.stringify(error));
            btn.textContent = 'Dispatch Message';
        });
});
