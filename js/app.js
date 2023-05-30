const form = document.querySelector('form');
const email = document.querySelector('.email-input');
const submit = document.querySelector('.submit');
const errorMessage = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-img');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(email.value.includes('@')) {
        errorIcon.classList.remove('show');
        errorMessage.classList.remove('show');
    } else {
        errorIcon.classList.add('show');
        errorMessage.classList.add('show');
    }

})