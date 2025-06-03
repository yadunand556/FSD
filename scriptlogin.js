document.addEventListener('DOMContentLoaded', function() {
    // Get the login form element
    const loginForm = document.getElementById('loginForm');
    
    // Add event listener for form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Validate form (basic validation)
      if (!email || !password) {
        showMessage('Please fill in all required fields', 'error');
        return;
      }
      
      // Here you would typically send the data to your server
      // For now, let's simulate a login process
      simulateLogin(email, password, rememberMe);
    });
    
    // Function to show messages to the user
    function showMessage(message, type = 'info') {
      // Check if a message container already exists
      let messageContainer = document.querySelector('.message-container');
      
      // If not, create one
      if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        messageContainer.style.position = 'fixed';
        messageContainer.style.top = '20px';
        messageContainer.style.right = '20px';
        messageContainer.style.zIndex = '1000';
        document.body.appendChild(messageContainer);
      }
      
      // Create the message element
      const messageElement = document.createElement('div');
      messageElement.className = `alert ${type === 'error' ? 'alert-danger' : 'alert-primary'} message`;
      messageElement.style.minWidth = '250px';
      messageElement.style.margin = '10px';
      messageElement.style.padding = '15px';
      messageElement.style.borderRadius = '8px';
      messageElement.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      messageElement.style.animation = 'fadeIn 0.3s ease-out';
      messageElement.textContent = message;
      
      // Add the message to the container
      messageContainer.appendChild(messageElement);
      
      // Remove the message after 5 seconds
      setTimeout(() => {
        messageElement.style.animation = 'fadeOut 0.3s ease-in';
        setTimeout(() => messageElement.remove(), 300);
      }, 5000);
    }
    
    // Simulate login process
    function simulateLogin(email, password, rememberMe) {
      // Show loading state
      const loginButton = document.querySelector('.btn-login');
      const originalText = loginButton.textContent;
      loginButton.disabled = true;
      loginButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Logging in...';
      
      // Simulate API call with timeout
      setTimeout(() => {
        // For demo purposes, we'll just accept any login
        showMessage('Login successful! Redirecting...', 'info');
        
        // Store user session if remember me is checked
        if (rememberMe) {
          localStorage.setItem('userEmail', email);
        }
        
        // Simulate redirect after successful login
        setTimeout(() => {
          // This would normally redirect to your dashboard or home page
          loginButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Redirecting...';
          // window.location.href = 'dashboard.html';
          
          // Since we don't have a dashboard page, we'll just reset the form after a few seconds
          setTimeout(() => {
            loginButton.disabled = false;
            loginButton.textContent = originalText;
            loginForm.reset();
          }, 2000);
        }, 1500);
      }, 2000);
    }
    
    // Add some visual effects
    
    // Parallax effect for background
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.body.style.backgroundPosition = `${50 - x * 10}% ${50 - y * 10}%`;
    });
    
    // Add focus and blur events for form inputs
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-5px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
      });
    });
    
    // Check if user has previously logged in (for remember me functionality)
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      document.getElementById('loginEmail').value = savedEmail;
      document.getElementById('rememberMe').checked = true;
    }
    
    // CSS animations for glowing elements
    const glows = document.querySelectorAll('.glow');
    glows.forEach((glow, index) => {
      glow.style.animation = `pulse 4s ease-in-out ${index * 2}s infinite alternate`;
    });
  });
  
  // Add keyframe animation for pulsing effect
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
    
    @keyframes pulse {
      0% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.1); }
      100% { opacity: 0.3; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);