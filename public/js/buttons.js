const taketoLogin = () => {
    window.location.href = '/login';
    }
const taketoSignup = () => {
    window.location.href = '/sign-up';
    }

document.querySelector('#login-btn').addEventListener('click', taketoLogin);
document.querySelector('#signup-btn').addEventListener('click', taketoSignup);
