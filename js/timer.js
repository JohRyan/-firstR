/*
2023.11.22
소멘텀 메인에 뜨는 시계
*/

//시간
const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    let hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    if(date.getHours()>12){
        hour = String(date.getHours()-12).padStart(2,"0");
        clock.innerText=`${hour} : ${minute} : ${second}`;
    }

    clock.innerText=`${hour} : ${minute} : ${second}`;

}
getClock();
setInterval(getClock, 1000);

