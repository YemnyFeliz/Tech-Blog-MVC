document.addEventListener('DOMContentLoaded', function() {
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

    const logoutLink = document.querySelector('#logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', logout);
    }
});
