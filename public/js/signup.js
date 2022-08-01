

const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim(); //placeholder
    const password = document.querySelector('#password-login').value.trim(); //placeholder
  
    if (username && password) {
      const response = await fetch('/api/users/signup', { //placeholder
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
    }
  };
  
  document
    .querySelector('') //placeholder
    .addEventListener('submit', signUpFormHandler); //placeholder