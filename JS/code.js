// Seleção de elementos

const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-input");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const todoList = document.querySelector("#todo-list");
const editandoTarefa = document.getElementById('editandoTarefa');

var tarefaEmEdicao = null;
// Funções

// Função de pesquisa

const inputPesquisa = document.querySelector("#search-input");


// Função filtro

const selectFilter = document.querySelector("#filter-select");


// botao de cancelar

function btnCancelar(){

    if(tarefaEmEdicao && tarefaOriginal){
        tarefaEmEdicao.textContent = tarefaOriginal;
        editForm.style.display = 'none';
        tarefaOriginal = null;
        tarefaEmEdicao = null;
    }
}



// Eventos

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (todoInput.value) {

        const newItem = `
            <div class="todo">
                <h3>${todoInput.value}</h3>
                <button class="finish-todo">
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
        todoInput.focus();

        const todoDivs = todoList.querySelectorAll(".todo");

        for (let i = 0; i < todoDivs.length; i++) {
            const todoDiv = todoDivs[i];
            const finishBtn = todoDiv.querySelector('.finish-todo');
            const removeBtn = todoDiv.querySelector('.remove-todo');
            const btnEditar = todoDiv.querySelector('.edit-todo');
            let index = i;

            finishBtn.addEventListener("click", () => {
                if (todoDiv.classList.contains("done")) {
                    todoDiv.classList.remove("done");
                } else if (todoDiv.classList.contains("done2")) {
                    todoDiv.classList.remove("done2");
                } else {
                    if (i % 2 == 0) {
                        todoDiv.classList.add("done2");
                    } else {
                        todoDiv.classList.add("done");
                    }
                }
            });

            removeBtn.addEventListener('click', () => {
                todoDiv.remove();
                if(editForm.style.display = 'block'){
                    editForm.style.display = 'none';
                }
            });

            btnEditar.addEventListener('click', () => {
                tarefaEmEdicao = todoDiv.querySelector('h3');
                tarefaOriginal = tarefaEmEdicao.textContent;
                editInput.value = tarefaEmEdicao.textContent;
                editForm.style.display = 'block';
            });
        }
    }
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (tarefaEmEdicao) {
        tarefaEmEdicao.textContent = editInput.value;
        tarefaEmEdicao = null;
    }
    editForm.style.display = 'none'
});