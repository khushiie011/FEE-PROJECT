// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');
const formSuccess = document.getElementById('form-success');

if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset errors
    errorName.style.display = 'none';
    errorEmail.style.display = 'none';
    errorMessage.style.display = 'none';
    formSuccess.style.display = 'none';
    
    let isValid = true;
    
    if(nameInput.value.trim() === '') {
      errorName.style.display = 'block';
      isValid = false;
    }
    
    if(emailInput.value.trim() === '') {
      errorEmail.innerText = 'Please enter an email address';
      errorEmail.style.display = 'block';
      isValid = false;
    } else if(!isValidEmail(emailInput.value.trim())) {
      errorEmail.innerText = 'Please enter a valid email address';
      errorEmail.style.display = 'block';
      isValid = false;
    }
    
    if(messageInput.value.trim() === '') {
      errorMessage.style.display = 'block';
      isValid = false;
    }
    
    if(isValid) {
      // Simulate form submission
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
        contactForm.reset();
        formSuccess.style.display = 'block';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      }, 1500);
    }
  });
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
