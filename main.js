const form = document.querySelector('form');
const lista = document.querySelector('ul');
const btnAdd = document.querySelector('button.add');
const btnSearch = document.querySelector('button.find');
const counter = document.querySelector('h2 span');
const numberTask = document.getElementsByClassName('.task')


const readInput = () => {
    const input = document.querySelector('input')
    const text = input.value;
    input.value = "";

    return text;
}
const addTask = () => {
    const textInput = readInput();
    if (textInput === "") return;
    const task = document.createElement('li');
    task.className = '.task'
    task.innerHTML = textInput + '<button><i class="far fa-trash-alt"></button>';
    lista.appendChild(task);
    counter.textContent = numberTask.length;
    const btnX = task.querySelectorAll('li button');
    btnX.forEach(btn => btn.addEventListener('click', removeTask));

};
const removeTask = (e) => {
    e.target.parentNode.parentNode.remove();
    counter.textContent = numberTask.length;
};

const findTask = () => {
    const searchText = readInput().toLowerCase();
    if (searchText === "") return;
    const singleTask = [...document.querySelectorAll('li')];
    singleTask.forEach(item => item.style.color = 'black')
    const resault = singleTask.filter(task => task.textContent.toLowerCase().includes(searchText));
    resault.forEach(item => item.style.color = 'red');
}

btnAdd.addEventListener('click', addTask);
btnSearch.addEventListener('click', findTask);