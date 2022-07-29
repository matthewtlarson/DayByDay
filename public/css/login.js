const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim(); //placeholder
    const password = document.querySelector('#password-login').value.trim(); //placeholder
  
    if (email && password) {
      const response = await fetch('/api/users/login', { //placeholder
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form') //placeholder
    .addEventListener('submit', loginFormHandler); //placeholder
