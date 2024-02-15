function getDetailsForAllUsers() {

    let str = [];
    // iterate localStorage
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
        console.log(key + "key");

        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
        console.log(value + "value");

        const obj = JSON.parse(value);
        // console.log the iteration key and value
        str[i] = obj;
        console.log(obj.name);
        console.log(str[i]);

    }
    console.log(str);
    return str;
}

window.onload = function () {
   
    console.log("לפני הכניסה לפונקצייה");

    console.log("אחרי הכניסה לפונקצייה");

    const email = document.cookie.split(',')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);

    document.getElementById('first_name').innerHTML = userjson.name;
    document.getElementById('phone').innerHTML = userjson.phoneNumber;
    document.getElementById('email').innerHTML = userjson.email;
    document.getElementById('password').innerHTML = userjson.password;
    document.getElementById('score').innerHTML = userjson.score;
    document.getElementById('score2').innerHTML = userjson.score2;

    console.log(userjson);

    document.getElementById('actions1').innerHTML = display1LastAction();
    document.getElementById('actions2').innerHTML = display2LastAction();
    document.getElementById('actions3').innerHTML = display3LastAction();
}


function display1LastAction(){
    const email = document.cookie.split(',')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    let str = userjson.actions[userjson.actions.length - 1].action + userjson.actions[userjson.actions.length - 1].time;
    return str;
}

function display2LastAction(){
    const email = document.cookie.split(',')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    let str = userjson.actions[userjson.actions.length - 2].action + userjson.actions[userjson.actions.length - 2].time;
    return str;
}

function display3LastAction(){
    const email = document.cookie.split(',')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);
    let str = userjson.actions[userjson.actions.length - 3].action + userjson.actions[userjson.actions.length - 3].time;
    return str;
}

    


