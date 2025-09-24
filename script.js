function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "✅ Thanks for contacting me!";
  this.reset();
});
