const logout = async () => {
    try {
        const response = await fetch ('api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Error logging out!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

document
.querySelector('#logout-link')
.addEventListener('click', logout);
