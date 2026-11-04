// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
let input = document.getElementById('todo-input');
let btn = document.getElementById('add-btn');
let list = document.getElementById("todo-list");
let error = document.getElementById("error-msg");

function add(e){
    e.preventDefault();
    if(input.value==""){
        error.style.display="block";
    }
    let newItem = document.createElement('li');
    list.textContent=input.value;
    list.appendChild(newItem);
    input.value='';
    
}
btn.addEventListener('click',add);
