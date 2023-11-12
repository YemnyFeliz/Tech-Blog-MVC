const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (!username || !password) {
        alert('please provide email and password');
    } else if (password.length < 8) {
        alert('Password must be at least 8 charaters long, please try again');
    }

    if (username && password) {
        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ username: username, password: password}),
                headers: {'Content-Type': 'application/json'},
            });
            
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Something went wrong, please try again!');
            }
        } catch (error) {
            console.error(error);
        }
    }
};

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);