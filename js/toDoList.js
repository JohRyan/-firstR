/*
최초 작성일 : 2023.11.24
최초 작성자 :
수정자 :
이력 : 
기능 : 소멘텀 메인에 뜨는 todo리스트 제어, 추가, todo리스트 로컬스토리지에 저장
*/

const frmTodo = document.getElementById("frmToDo");
const listTodo = document.getElementById("listToDo");
const inputTodo = document.querySelector("#frmToDo input");
const todo = document.getElementById("TODO");
let todos=[];
const KEY_TODOS="TODOS";

//todo리스트에서 항목을 삭제
function deleteTodo(event){
//console.log("deleteTodo 함수 시작");
//console.log(event);
//console.dir(event);
//console.log(event.target.parentElement);

const myLi=event.target.parentElement;

myLi.remove();
todos=todos.filter((todo)=>todo.id!==parseInt(myLi.id));
saveToDos();


}

function saveToDos(){
    localStorage.setItem(KEY_TODOS,JSON.stringify(todos));
}

function displayTodo(arg){
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
    button.addEventListener("click", deleteTodo);

    myLi.appendChild(mySpan);
    myLi.appendChild(button);
    listTodo.appendChild(myLi);    
}


function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = inputTodo.value;
    //console.log(valueTodo);
    const newTodoObj={
        text:valueTodo,
        id:Date.now()
    };
    
    todos.push(newTodoObj);
    displayTodo(newTodoObj);
    saveToDos();
    inputTodo.value="";


}

frmTodo.addEventListener("submit", handleSubmitTodo);

const saveTodos = localStorage.getItem(KEY_TODOS);
if(saveTodos !== null){
    //console.log(saveTodos);
    //console.log(JSON.parse(saveTodos));
    const parseLsSaveTodos = JSON.parse(saveTodos);
    todos=parseLsSaveTodos;
    parseLsSaveTodos.forEach(displayTodo);


    // parseLsSaveTodos.forEach(item => {
    //     //console.log(item)
    // });
}
