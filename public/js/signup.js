

const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim(); //placeholder
    const password = document.querySelector('#password').value.trim(); //placeholder
    const email = document.querySelector('#email').value.trim(); //placeholder
  
    if (username && password && email) {
      const response = await fetch('/api/users/signup', { //placeholder
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
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
    .querySelector('#signup-button') //placeholder
    .addEventListener('click', signUpFormHandler); //placeholder