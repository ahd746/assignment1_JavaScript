"use strict";
// Get the elements
let input = document.querySelector('input');
let root = document.getElementById('root');
let addBtn = document.querySelectorAll('button')[0];
let clearBtn = document.querySelectorAll('button')[1];

//Event: on click add button 
addBtn.addEventListener('click', (e) => {

  //prevent form from submit
  e.preventDefault();

  //create label with text of input
  let text = document.createTextNode(input.value);
  let label = document.createElement('label');
  label.appendChild(text);

  //create checkbox and add its attributes and events
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'mr-2');

  //Event: when checkbox clicked todo goes down and line-through property added and sound effect, 
  checkbox.addEventListener('click', (e) => {
    e.target.nextElementSibling.getAttribute('class') === 'underline' ?
      e.target.nextElementSibling.removeAttribute('class', 'underline') :
      (
        e.target.nextElementSibling.setAttribute('class', 'underline'),
        e.target.parentElement.parentElement.appendChild(e.target.parentElement),
        document.getElementById("audio").play()
      )

  })

  //Create delete button and add its events
  let delBtn = document.createElement('button');
  text = document.createTextNode('X');
  delBtn.appendChild(text);
  delBtn.setAttribute('class', 'del ml-2');
  delBtn.setAttribute('title', 'delete');
  //Event: on click remove the todo
  delBtn.addEventListener('click', (e) => { e.target.parentElement.remove() });

  //create div which contain all element and append it to the root div 
  let div = document.createElement('div');
  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(delBtn);
  root.appendChild(div);

  //clear the input 
  input.value = '';
})

// Event: on clear button to clear the input todo
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  input.value = '';
})


//Phase two add todos API as example for the user 
//fetch data 
let fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const todos = await response.json();

  // loop through data and add each todo to the DOM 
  todos.map(item => {
    //create label with text of input
    let text = document.createTextNode(item.title);
    let label = document.createElement('label');
    label.appendChild(text);
    //create checkbox and add its attributes and events
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'mr-2');

    //Event: when checkbox clicked todo goes down and line-through property added and sound effect, 
    checkbox.addEventListener('click', (e) => {
      e.target.nextElementSibling.getAttribute('class') === 'underline' ?
        e.target.nextElementSibling.removeAttribute('class', 'underline') :
        (
          e.target.nextElementSibling.setAttribute('class', 'underline'),
          e.target.parentElement.parentElement.appendChild(e.target.parentElement),
          document.getElementById("audio").play()
        )

    })

    //Create delete button and add its events
    let delBtn = document.createElement('button');
    text = document.createTextNode('X');
    delBtn.appendChild(text);
    delBtn.setAttribute('class', 'del ml-2');
    delBtn.setAttribute('title', 'delete');
    //Event: on click remove the todo
    delBtn.addEventListener('click', (e) => { e.target.parentElement.remove() });

    //create div which contain all element and append it to the root div 
    let div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(delBtn);
    root.appendChild(div);
  });
}
// Call function
fetchTodos();