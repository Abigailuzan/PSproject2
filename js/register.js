function passwordAuthentication(){
    let password = document.getElementById('password').value;
    if (!passwordSize(password)){
        document.getElementById('password').style.backgroundColor='red';
        document.getElementById('password').value= null;
        return false;
    }
    document.getElementById('password_verification').style.backgroundColor='green';
    return true;
}
function emailAuthentication(){
    const email = document.getElementById("email").value;
    let user =JSON.parse(localStorage.getItem('email'));
    if (user===undefined || user===null)
        return true;
    if (user.email=== email){
        alert("account already exists");
        document.getElementById('email').value= null;
        document.getElementById('password').value= null;
        document.getElementById('password_verification').value= null;

        return false;
    }
    return true;
}
function password2Authentication(){
    const password = document.getElementById("password").value;
    const password_verification = document.getElementById("password_verification").value;
    if (password !== password_verification) {
        alert('passwords not match');
        document.getElementById('password_verification').style.backgroundColor='red';
        document.getElementById('password_verification').value= null;
        return false;
    }
    document.getElementById('password_verification').style.backgroundColor='green';
    return true;
}
passwordSize = password => {
    if (!(7 < password.length && password.length < 16)) {
        alert("Password must be between 8 and 15 characters.");
    }
    return 7 < password.length && password.length < 16;
};
function createAccount(){
    if (emailAuthentication() === false)
        return false;
    const user = {
        name: document.getElementById('name').value,
        phoneNumber: document.getElementById('phone_number').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,

        score: 0,
        scroe2: 0,
        actions: [],
        creationDate: new Date()
    }
    // Set user data in localStorage using email as unique identifier
    localStorage.setItem(user.email, JSON.stringify(user));
    // Set user data in cookie
    let d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days expiration
    const cookieData = `email=${user.email}, name=${user.name}`;
    document.cookie = `${cookieData};path=/;expires=${d}`;
    // Submit the form
    document.getElementById('register').submit();
}

function goBack(){
    location.href = 'index.html';
}

cookieCounter = document.cookie.split(';').length;

