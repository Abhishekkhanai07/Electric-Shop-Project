// Contact Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you! We'll get back to you shortly.");
        this.reset();
      });
    }
  
    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Simple check (can be replaced with real validation or authentication)
        if (username === 'Abhishek Khanai' && password === '12345678') {
          alert('Login successful!');
          window.location.href = 'index.html'; // redirect to homepage
        } else {
          alert('Invalid username or password.');
        }
      });
    }
  });
  