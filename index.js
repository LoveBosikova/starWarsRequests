const form = document.querySelector('form');
console.log(form.elements.number);

// Проверка валидности введённых данных
form.elements.number.addEventListener('keyup', () => {
    if (form.elements.number.value > 10) {
        document.querySelector('.numErr').textContent = 'Умерь запрос до 10';
    } else {
        document.querySelector('.numErr').textContent = '';
    }
});

form.elements.searchObject.addEventListener('change', () => {
    if (form.elements.searchObject.value == 'failure') {
        document.querySelector('.valErr').textContent = 'Пустой запрос не ведёт к свету. Сделай выбор';
    } else {
        document.querySelector('.valErr').textContent = '';
    }
});

// Формируем запрос 
function createQuery(){
    return `https://swapi.dev/api/${form.elements.searchObject.value}/${form.elements.number.value}/`;
}

// Логика вывода результата на экран
function showResult (item){
    document.querySelector('.result').textContent = `Твоя судьба - ${item}`;

}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.elements.searchObject.value == 'failure') {
        document.querySelector('.valErr').textContent = 'Пустой запрос не ведёт к свету. Сделай выбор';
    } else {
        document.querySelector('.valErr').textContent = '';
    }

    if (form.elements.number.value == '') {
        document.querySelector('.numErr').textContent = 'Пустота порождает пустоту. Введи число';
    } else {
        document.querySelector('.numErr').textContent = '';
    }
    try{
        const response = await fetch(createQuery());
        const item = await response.json();
        showResult(item.name);
    } catch (err) {
        console.log(err);
        throw err;
    }
});