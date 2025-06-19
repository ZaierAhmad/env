document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageDiv = document.getElementById('formMessage');

  if (name === '' || email === '') {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Please fill out both fields.';
    return;
  }

  // Basic email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Please enter a valid email address.';
    return;
  }

  messageDiv.style.color = 'green';
  messageDiv.textContent = `Thank you, ${name}! Your submission has been received.`;

  // Clear form fields
  this.reset();
});
