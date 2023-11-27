/*
2023.11.22
소멘텀 메인에 뜨는 인사말
*/
const divLogin = document.getElementById("Login");
const formLogin = document.getElementById("Login");
const inputLogin = document.querySelector("#name");
const btnLogin = document.getElementById("btnLogin");
const h1 = document.getElementById("h1");

//class
const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "userName";


//btnLogin.innerHTML="클릭";
//console.log(inputLogin.value);

formLogin.addEventListener("submit", clickLogin);

function clickLogin(event){
    event.preventDefault();
    const userName = inputLogin.value;
    console.dir(event);
    console.log("클릭");
    console.log(KEY_USERNAME);
    h1.innerHTML = `${KEY_USERNAME}님, 반가워요`;
    localStorage.setItem('KEY_USERNAME', userName);

    displayGreeting(userName);
}
function displayGreeting(argName){
    h1.innerHTML = `${argName}님, 반가워요`;
    h1.classList.remove(HIDDEN_CLASSNAME);
    formLogin.classList.add(HIDDEN_CLASSNAME);
}

const lsUserName = localStorage.getItem("KEY_USERNAME");
if(lsUserName === null){
    formLogin.classList.remove(HIDDEN_CLASSNAME);
    h1.classList.add(HIDDEN_CLASSNAME);
    formLogin.addEventListener("submit", clickLogin);
}
else{
    displayGreeting(lsUserName);
}

