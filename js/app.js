// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
document.addEventListener("DOMContentLoaded",function(){


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
    updateCounter();
   });

   newItem.appendChild(deleteBtn);

    list.appendChild(newItem);
    input.value='';
    updateCounter();
}
    
}
btn.addEventListener('click',add);

function toggleItem(e){
    if(e.target.tagName=="LI"){
    e.target.classList.toggle("completed");
    }
    updateCounter();

}
list.addEventListener("click",toggleItem);

let filterAll = document.getElementById('filter-all');
let filterActive = document.getElementById('filter-active');
let filterDone = document.getElementById('filter-done');

function filter(){
let items = list.querySelectorAll('li');
for(let item of items){
    item.style.display="block";
}
}
filterAll.addEventListener("click",filter);

function active(){
    let items = list.querySelectorAll('li');
    for(let item of items){
        if(item.className == "completed"){
            item.style.display="none";
        }
    }
}
filterActive.addEventListener("click" ,active);

function done(){
    let items = list.querySelectorAll('li');
    for (let item of items){
        if(item.className=="completed"){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }

    }
}
filterDone.addEventListener("click",done);
let counter = document.getElementById('counter');

function updateCounter(){
    let items=document.querySelectorAll('li');
    let count= 0;
    for(let item of items){
        if(item.className != 'completed'){
            count++;
        }
    }
    counter.textContent=count+" item(s) left";
} 
})
