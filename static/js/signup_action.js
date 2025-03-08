document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (fullName && username && email && password) {
        alert('Signup successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
