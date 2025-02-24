let submitButton = document.getElementById('addItem');
let todos = document.querySelector('.todos');

submitButton.addEventListener('click',function(){
    let todo = document.getElementById('searchBar').value;
    if(todo.length == 0){
        return;
    }
    let parentDiv = document.querySelector('.todos');
    let todoDiv = document.createElement('div');
    let textDiv = document.createElement('h3');
    let crossBtn = document.createElement('i');
    let doneCheckBox = document.createElement('input');
    doneCheckBox.type="checkbox";
    crossBtn.classList.add('cross','fa-solid','fa-square-xmark');
    todoDiv.appendChild(doneCheckBox);
    todoDiv.appendChild(textDiv);
    todoDiv.appendChild(crossBtn);
    textDiv.textContent = todo;
    parentDiv.prepend(todoDiv);
    todoDiv.classList.add('todoItem');
});

todos.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target && e.target.classList.contains('cross')) {
        // If the clicked element is a cross button
        let todoDiv = e.target.parentElement;
        todoDiv.remove(); // Remove the todo item
    }

    // Strike-through text when checkbox is clicked
    if (e.target && e.target.type === 'checkbox') {
        let textDiv = e.target.nextElementSibling; // Select the text element
        if (e.target.checked) {
            textDiv.style.textDecoration = 'line-through'; // Strike-through text
        } else {
            textDiv.style.textDecoration = 'none'; // Remove strike-through if unchecked
        }
    }
});
