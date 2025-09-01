// Toggle About Me and Skills sections by clicking headings
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.toggle-heading').forEach(function(heading) {
		heading.addEventListener('click', function() {
			const target = heading.getAttribute('data-toggle');
			const content = document.getElementById(target + '-content');
			if (content) {
				content.classList.toggle('hide');
			}
		});
	});
});

// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('#contact form');
	if (form) {
		form.addEventListener('submit', function(e) {
			let valid = true;
			// Name validation
			const name = form.elements['name'];
			if (!name.value.trim()) {
				valid = false;
				name.style.borderColor = '#d32f2f';
			} else {
				name.style.borderColor = '';
			}
			// Email validation
			const email = form.elements['email'];
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!email.value.trim() || !emailPattern.test(email.value)) {
				valid = false;
				email.style.borderColor = '#d32f2f';
			} else {
				email.style.borderColor = '';
			}
			// Message validation
			const message = form.elements['message'];
			if (!message.value.trim()) {
				valid = false;
				message.style.borderColor = '#d32f2f';
			} else {
				message.style.borderColor = '';
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

