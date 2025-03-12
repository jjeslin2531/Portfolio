//Github profile pic
document.addEventListener('DOMContentLoaded', function() {
  const username = 'jjeslin2531';
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('github-profile-pic').src = data.avatar_url;
      const bioElement = document.getElementById('github-bio');
      bioElement.textContent = data.bio || 'No bio available';
    })
    .catch(error => {
      console.error('Error fetching GitHub profile:', error);
    });
});


//navigation bar
// For Hamburger Menu Toggle on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

//fade in for the tech stacks
document.addEventListener("DOMContentLoaded", function () {
    const techItems = document.querySelectorAll(".tech-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Triggers when 30% of the element is visible

    techItems.forEach(item => {
        observer.observe(item);
    });
});

//contact form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Perform basic validation
        if (name && email && message) {
            // Show confirmation message
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset(); // Resets the form fields
        } else {
            alert("Please fill out all fields.");
        }
    });
});


