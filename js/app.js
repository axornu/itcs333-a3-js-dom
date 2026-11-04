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
    else{
        error.style.display="none";
    let newItem = document.createElement('li');
    newItem.textContent=input.value;
    
   let deleteBtn = document.createElement("button");
   deleteBtn.textContent="Delete";
   deleteBtn.classList.add('delete-btn');
   deleteBtn.addEventListener("click",function(){
    list.removeChild(newItem);
   });

   newItem.appendChild(deleteBtn);

    list.appendChild(newItem);
    input.value='';
}
    
}
btn.addEventListener('click',add);

function toggleItem(e){
    if(e.target.tagName=="LI"){
    e.target.classList.toggle("completed");
    }

}
list.addEventListener("click",toggleItem);

