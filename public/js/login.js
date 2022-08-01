const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim(); //placeholder
    const password = document.querySelector('#password-login').value.trim(); //placeholder
  
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
  
document.querySelector('.login-form'); //placeholder
document.addEventListener('submit', loginFormHandler); //placeholder

document.querySelector('.signupbutton'); //placeholder
document.addEventListener('submit', function () {
  const signupredirect = await fetch('/signup', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
  });
})

