const input = document.getElementById('input');
const subBtn = document.getElementById('sub-btn');
const form = document.querySelector('.form');
const todo = document.querySelector('.todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => {
    renderTask(task)
})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let task = input.value;
    task = task.trim();
    console.log(task)
    if (task === '') {
        return;
    }

    const obj = {
        task: task,
        id: Date.now(),
        complete: false
    }
    tasks.push(obj);
    input.value = '';
    saveTask();
    renderTask(obj);
});

function renderTask(task) {
    const li = document.createElement('li');
    console.log(li);
    li.classList.add('task')
    li.innerHTML = `
    <span>${task.task}</span>
    <button>delete</button>    
    `;
    todo.appendChild(li);

    if (task.complete === true) li.classList.add('complete')

    li.addEventListener('click', function (e) {
        console.log(task);
        if (e.target.tagName === 'BUTTON') return
        task.complete = !task.complete;
        li.classList.toggle('complete');
        saveTask();
    });

    li.querySelector('button').addEventListener('click', function (e) {
        console.log(task.id)
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
        saveTask();

    })
}

function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}





