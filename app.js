function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';
    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = ''

    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
      var delButton = document.createElement('button');
      var delLabel = document.createTextNode("Delete");
        delButton.appendChild(delLabel);
      var toDoIndex = toDos.indexOf(toDo);

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      delButton.addEventListener("click", function(event) {
        var toDoIndex = toDos.indexOf(toDo);

        toDoList.removeChild(newLi);
        toDos.splice(toDoIndex, 1);
      });
    });
  }
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
