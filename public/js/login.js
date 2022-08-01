const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim(); //placeholder
    const password = document.querySelector('#password').value.trim(); //placeholder
  
    if (username && password) {
      const response = await fetch('/api/users/login', { //placeholder
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
document.querySelector('#login-button') //placeholder
        .addEventListener('click', loginFormHandler); //placeholder

document.querySelector('#signup-button')//placeholder
        .addEventListener('click', function () {
  document.location.replace('/signup');
});


