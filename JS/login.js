const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginMessage = document.getElementById('loginMessage');
loggedIn = false;

username.addEventListener('keyup', () => {
    loginBtn.disabled = !username.value && !password.value;
});

loginBtnAdmin = (e) => {
    e.preventDefault();
    fetch(
        'http://localhost:3001/'
    )
        .then((res) => {return res.json();})
        .then((answer) => {
            questions = answer[0].user;
            username.value === 'Milica' && password.value === "Admin" ? loginMessage.innerText = questions : loginMessage.innerText = "invalid" ;
        
            console.log("questions: ");
            console.log(answer[0].user);
        })
        .catch((err) => {
            console.log(err);
        });
       loggedIn = true
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
        //window.location.assign('../HTML/admin.html');
};




