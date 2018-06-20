function onReady() {

//------------step 1-----------//
let id = 0;
//----------------------//

  const toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,

      //------step 2-----------------//
      id: id.value
      //----------------------//

    });
    //---------step 3-----------//
    id++;
    //-------------------//
    newToDoText.value = '';

    renderTheUI();
  }


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      //--------------step 4----------------//


          let remove = document.createElement('button');

          let removename = document.createTextNode("Delete");

          remove.appendChild(removename);

          newLi.appendChild(remove);

          remove.addEventListener("click", function (){

            // toDoList.removeChild (newLi);

            //---------------step 5------------//
            toDos.filter(toDos.id);

            //--------------------------------//


            // ------------step 6--------------//
            renderTheUI();

            //---------------------------------//

          });

      //-----------------------------------//

    });

  }

}

window.onload = function() {

  onReady();
};
