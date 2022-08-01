const dailyProgress = async (event) => {
    event.preventDefault();
  
    const physical_rating = document.querySelector('').value.trim(); //placeholder
    const mental_rating = document.querySelector('').value.trim(); //placeholder
    const social_rating = document.querySelector('').value.trim(); //placeholder
    const spiritual_rating = document.querySelector('').value.trim(); //placeholder
    const emotional_rating = document.querySelector('').value.trim(); //placeholder
    const overall_rating = document.querySelector('').value.trim(); //placeholder
    const button = document.querySelector('');
  
    if ((physical_rating || mental_rating || social_rating || emotional_rating || overall_rating || spiritual_rating) && button) {
      const response = await fetch('/api/table/dailyProgress', { //placeholder
        method: 'POST',
        body: JSON.stringify({ physical_rating, mental_rating, social_rating, spiritual_rating, emotional_rating, overall_rating }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    else {
        alert('Failed to record data');
    }
  };
  
  document
    .querySelector('.login-form') //placeholder
    .addEventListener('submit', dailyProgress); //placeholder