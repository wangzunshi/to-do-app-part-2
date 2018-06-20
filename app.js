function onReady() {

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get text
    let task = newToDoText.value;

    //create new html li tag
    let newLi = document.createElement('li');

    //create new input tag
    let newInput = document.createElement('input');


    //input tag type to checkbox
    newInput.type = "checkbox";

    //list the task at the bottom
    newLi.textContent = task;

    // insiide new list tag is new input tag
    newLi.appendChild(newInput);

    //inside ul tag is list tag
    toDoList.appendChild(newLi);

    //empty input after the form is submitted
    newToDoText.value = '';




    let remove = document.createElement('button');

    let removename = document.createTextNode("Delete");

    remove.class = ("mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent");

    remove.appendChild(removename);

    newLi.appendChild(remove);

    remove.addEventListener("click", function (){

      toDoList.removeChild (newLi);

  });

    });
}

window.onload = function() {

  onReady();
}
