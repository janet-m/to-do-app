function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList  = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    let delButton = document.createElement('button');
    let delLabel = document.createTextNode("Delete");
    delButton.appendChild(delLabel);
    newLi.textContent = title;
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(delButton);
    newToDoText.value = '';
    delButton.addEventListener("click", (event) => {
      toDoList.removeChild(newLi);
    });

  });
}

window.onload = function() {
  onReady();
};
