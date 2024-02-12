function Authentication(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const localData = JSON.parse(localStorage.getItem(email));
    if (localData === undefined || localData=== null){
        alert('account does not exist please register');
        document.getElementById('name').value = null;
        document.getElementById('email').value = null;
        document.getElementById('password').value = null;
        return false;
    }
    else if (name === localData.name){
        if (email === localData.email){
            if (password === localData.password)
            {
                document.getElementById('logIN').submit();
                return true;
            }
            else{
                alert('please enter a valid password')
                document.getElementById('password').value = null;
                return false;
            }
        }
        else{
            alert('wrong email address');
            document.getElementById('email').value = null;
            return false;
        }
    }
    else{
        alert(' wrong player name');
        document.getElementById('name').value = null;
        return false;
    }
}

function goBack(){
   location.href ="index.html";
}
window.onload=function() {
    let cookieDetail = document.cookie.split(',');
    cookieDetail = cookieDetail.map(item => item.trim().split('='));
    for (let i = 0; i < cookieDetail.length; i++) {
        const [key, value] = cookieDetail[i];
        if (key === 'email') {
            document.getElementById('email').value = value;
        } else if (key === 'name') {
            document.getElementById('name').value = value;
        }
    }
};