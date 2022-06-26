async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#signup-first-name').value.trim();
    const last_name = document.querySelector('#signup-last-name').value.trim();
    const user_name = document.querySelector('#signup-user-name').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const phone_number = document.querySelector('#signup-telephone').value.trim();
    const address_street = document.querySelector('#signup-street-address').value.trim();
    const address_city = document.querySelector('#signup-city').value.trim();
    const address_state = document.querySelector('#signup-state').value.trim();
    const address_zip = document.querySelector('#signup-zip').value.trim();
    
    if (user_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                user_name,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            console.log('User created');
            const user_id = await response.json().then(data => data.id);
            const client_response = await fetch('/api/clients', {
                method: 'POST',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    address_street,
                    address_city,
                    address_state,
                    address_zip,
                    phone_number,
                    user_id

                }),
                headers: {'Content-Type': 'application/json'}
            });

            if (client_response.ok) {
                console.log('Client created');
                window.location.href = '/';
            } else {
                alert('Error creating client');
            }
            
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
