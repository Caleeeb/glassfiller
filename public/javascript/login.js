async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
          console.log('New User Created');
          // after successfully creating new user, return to homepage
          return ('../../homepage');
      } else {
          alert(response.statusText);
      }
    }
  }

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);



async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('logged In')
        // after successfully logging in, return to homepage 
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);