const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    console.log("form is submitting")
    e.preventDefault();

    clearMessages();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    if (name === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }
    if (email === '') {
        showError('emailError', 'email is required');
        isValid = false;
    }else if (!checkEmail(email)) {
        showError('emailError', 'Please Enter a Valid Email Address');
        isValid = false;
    }
    if (message === '') {
        showError('messageError', 'message is required');
        isValid = false;
    }

    if (isValid) {  
        document.getElementById('successMessage').innerText = 'Thank you! Your message has been sent successfully.'
        document.getElementById('successMessage').style.display = 'block';
        form.reset();
    }
})

function clearMessages() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('successMessage').innerText = '';

}

function showError(elementId, message){
    document.getElementById(elementId).innerText = message
}

function checkEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}