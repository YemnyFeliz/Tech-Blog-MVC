const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (!username || !password) {
        alert('Please enter your username and password');
      }
    
      if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username: username, password: password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Something went wrong... Please try again!');
        }
      }
    };

    document
    .querySelector('.login-form')
    .addEventListener('submit', loginHandler);
