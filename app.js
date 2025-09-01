// Toggle About Me and Skills sections with Tailwind classes
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.toggle-heading').forEach(function (heading) {
    heading.addEventListener('click', function () {
      const target = heading.getAttribute('data-toggle');
      const content = document.getElementById(target + '-content');

      if (content) {
        if (content.classList.contains('hidden')) {
          // Show content with animation
          content.classList.remove('hidden');
          content.classList.add('max-h-[1000px]', 'opacity-100');
        } else {
          // Hide content smoothly
          content.classList.add('hidden');
          content.classList.remove('max-h-[1000px]', 'opacity-100');
        }
      }
    });
  });
});

// Contact form validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', function (e) {
      let valid = true;

      // Name validation
      const name = form.elements['name'];
      if (!name.value.trim()) {
        valid = false;
        name.classList.add('border-red-600');
      } else {
        name.classList.remove('border-red-600');
      }

      // Email validation
      const email = form.elements['email'];
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value)) {
        valid = false;
        email.classList.add('border-red-600');
      } else {
        email.classList.remove('border-red-600');
      }

      // Message validation
      const message = form.elements['message'];
      if (!message.value.trim()) {
        valid = false;
        message.classList.add('border-red-600');
      } else {
        message.classList.remove('border-red-600');
      }

      if (!valid) {
        e.preventDefault();
        alert('Please fill out all fields correctly.');
      }
    });
  }
});

// Global function for onclick="scrollToTop()" in HTML
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
