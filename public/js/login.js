async function signInForm (event) {
    event.preventDefault();
    const username = document.querySelector('#user_name').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (user_name && password) {
        const response = await fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            console.log('User logged in');
            window.location.href = '/';
        } else {
            alert(response.statusText);
        }
    }

}
document.querySelector('#sign-in-btn').addEventListener('click', signInForm);
