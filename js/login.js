// Login Validation & Toggle
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePwdBtn = document.getElementById('toggle-pwd');
const loginBtn = document.getElementById('login-btn');
const btnGoogle = document.getElementById('btn-google');
const errorUser = document.getElementById('error-user');
const errorPwd = document.getElementById('error-pwd');
const loginSuccess = document.getElementById('login-success');

if(btnGoogle) {
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginSuccess.innerText = 'Google Sign-In successful! Redirecting...';
    loginSuccess.style.display = 'block';
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
}

if(togglePwdBtn) {
  togglePwdBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle Icon
    if(type === 'text') {
      togglePwdBtn.classList.remove('fa-eye');
      togglePwdBtn.classList.add('fa-eye-slash');
    } else {
      togglePwdBtn.classList.remove('fa-eye-slash');
      togglePwdBtn.classList.add('fa-eye');
    }
  });
}

if(loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    errorUser.style.display = 'none';
    errorPwd.style.display = 'none';
    loginSuccess.style.display = 'none';
    
    let isValid = true;
    const emailValue = usernameInput.value.trim();
    
    if(emailValue === '') {
      errorUser.innerText = 'Please enter an email address';
      errorUser.style.display = 'block';
      isValid = false;
    } else if(!isValidEmail(emailValue)) {
      errorUser.innerText = 'Please enter a valid email address (must contain @)';
      errorUser.style.display = 'block';
      isValid = false;
    }
    
    if(passwordInput.value.trim() === '') {
      errorPwd.style.display = 'block';
      isValid = false;
    }
    
    if(isValid) {
      // Simulate Login
      loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
      loginBtn.disabled = true;
      
      setTimeout(() => {
        loginBtn.innerHTML = 'Login';
        loginBtn.disabled = false;
        loginSuccess.style.display = 'block';
        
        // Mock redirect
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      }, 1500);
    }
  });
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
