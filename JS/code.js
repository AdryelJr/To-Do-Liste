// Seleção de elementos

const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-input");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const todoList = document.querySelector("#todo-list");

// Funções

// Eventos

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(todoInput.value != 0){

        const newItem = `
            <div class="todo">
                <h3>${todoInput.value}</h3>
                <button class="edit-todo">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="edit-todo">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="remove-todo">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

todoList.innerHTML += newItem;
todoInput.value = ''; 

    }
});