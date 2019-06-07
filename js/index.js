// Hard-coded profiles
const profile1 = {name: 'Jack Nicolas', username: 'JackNicolas123', password: 'ilovetony'};
const profile2 = {name: 'Harry Yu', username: 'HarryYu123', password: 'harrypotter'};

// Toggle Login & Create Account
$('.message a').click(
    function(){
        $('.toggle-form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// Load profile given valid login info
function loadProfile() {
    var username = document.querySelector('#login-username').value;
    var password = document.querySelector('#login-pw').value;

    if (username===profile1.username && password===profile1.password) {
        window.location = 'profile1.html';
    } else if (username===profile2.username && password===profile2.password) {
        window.location = 'profile2.html';
    } else {
        alert("Wrong username or password");
    }
}

document.getElementById("login-button").onclick = loadProfile;
    
// Load login/home page after account has been "created"
function loadLogin() {
    
    alert("Account successfully created");
    window.location = 'index.html';
    
}

document.getElementById('create-account-button').onclick = loadLogin;


