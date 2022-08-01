const logout = async () => {
    const response = await fetch('/api/users/logout', { //placeholder
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, //placeholder
    });
  
    if (response.ok) {
      document.location.replace('/login'); //placeholder
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout); //placeholder
