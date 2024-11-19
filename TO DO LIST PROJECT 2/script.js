document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const task = input.value.trim();
        if (task) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${task}
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(listItem);
            input.value = "";

            listItem.querySelector(".delete-btn").addEventListener("click", () => {
                listItem.remove();
            });
        }
    });
});
