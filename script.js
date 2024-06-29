function togglemenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}






type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "6mMqJzJ48dPsFsFM5",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}