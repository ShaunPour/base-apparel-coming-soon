const form = document.querySelector('form');
const email = document.querySelector('.email-input');
const submit = document.querySelector('.submit');
const error = document.querySelector('.error-div');

form.addEventListener('submit', (e) => {
    e.preventDefault();

});

submit.addEventListener('click', () => {
    if(email.value.includes('@')) {
        error.classList.remove('show');
        email.classList.remove('border-error');
    } else {
        error.classList.add('show');
        email.classList.add('border-error');
    }
});