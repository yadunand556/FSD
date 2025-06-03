
document.getElementById('skillForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const skills = document.getElementById('skillsInput').value;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<div class='alert alert-info'>Fetching job roles for: <strong>${skills}</strong></div>`;
  setTimeout(() => {
    resultsDiv.innerHTML += `<ul class='list-group mt-3'>
      <li class='list-group-item'>Software Engineer</li>
      <li class='list-group-item'>Data Analyst</li>
      <li class='list-group-item'>ML Engineer</li>
    </ul>`;
  }, 1000);
});


// Modal functionality
document.getElementById('settingsBtn').onclick = () => {
  document.getElementById('settingsModal').style.display = 'block';
};

document.getElementById('closeSettings').onclick = () => {
  document.getElementById('settingsModal').style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === document.getElementById('settingsModal')) {
    document.getElementById('settingsModal').style.display = 'none';
  }
};

// Theme toggle
document.getElementById('themeToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-theme', this.checked);
});

// Profile form submission
document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert(`Profile updated:\nName: ${name}\nEmail: ${email}`);
});
