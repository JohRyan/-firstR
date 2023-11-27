/*
최초 작성일 : 2023.11.24
최초 작성자 :
수정자 :
이력 : 
기능 : 소멘텀 메인에 뜨는 link리스트 제어, 추가, link리스트 로컬스토리지에 저장
*/

const frmLink = document.getElementById("frmLink");
const listLink = document.getElementById("listLink");
const inputLink = document.querySelector("#frmLink input");
const link = document.getElementById("LINK");
let links=[];
const KEY_LINKS="LINKS";

//todo리스트에서 항목을 삭제
function deleteLink(event){
//console.log("deleteTodo 함수 시작");
//console.log(event);
//console.dir(event);
//console.log(event.target.parentElement);

const myLi=event.target.parentElement;

myLi.remove();
links=links.filter((link)=>link.id!==parseInt(myLi.id));
saveLinks();


}

function saveLinks(){
    localStorage.setItem(KEY_LINKS,JSON.stringify(links));
}

function displayLink(arg){
    //console.log("hi", arg);
    //ul>li>span
    //리스트(ul)에 추가하기
    //li추가
    //span추가
    //span에 할일(arg) 추가
    const myLi = document.createElement("li");
    myLi.id=arg.id;
    const mySpan = document.createElement("span");
    mySpan.innerText=arg.text;

    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteLink);

    myLi.appendChild(mySpan);
    myLi.appendChild(button);
    listLink.appendChild(myLi);    
}


function handleSubmitLink(event){
    event.preventDefault();
    const valueLink = inputLink.value;
    //console.log(valueLink);
    const newLinkObj={
        text:valueLink,
        id:Date.now()
    };
    
    links.push(newLinkObj);
    displayLink(newLinkObj);
    saveLinks();
    inputLink.value="";


}

frmLink.addEventListener("submit", handleSubmitLink);

const saveLinksList = localStorage.getItem(KEY_LINKS);
if(saveLinksList !== null){
    //console.log(saveLinksList);
    //console.log(JSON.parse(saveLinksList));
    const parseLsSaveLinks = JSON.parse(saveLinksList);
    links=parseLsSaveLinks;
    parseLsSaveLinks.forEach(displayLink);


    // parseLsSaveLinks.forEach(item => {
    //     //console.log(item)
    // });
}
