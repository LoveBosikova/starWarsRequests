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
    if (item == undefined) {
        return;
    }
    document.querySelector('.result').textContent = `Твоя судьба - ${item}`;
}

// Логика лоадера

const loaderContainer = document.querySelector('.loader');
const displayLoading = () => {
    loaderContainer.style.display = 'block';
};

const hideLoading = () => {
    loaderContainer.style.display = 'none';
};
// РАбота с кнопкой сабмит - продолжение обработки данных, запрос + логика анимации
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    displayLoading();
    if (form.elements.searchObject.value == 'failure' || form.elements.number.value == '') {
        document.querySelector('.valErr').textContent = 'Пустой запрос не ведёт к свету. Сделай выбор';
        hideLoading();
    } else {
        document.querySelector('.valErr').textContent = '';
    }

    try{
        const response = await fetch(createQuery());
        const item = await response.json();
        console.log(item);
        hideLoading();

        const searchObj = item.name === undefined? item.title : item.name;
        showResult(searchObj);
    } catch (err) {
        console.log(err);
        hideLoading();
        showResult('Пустота. Но всегда можно попробовать заново');
        throw err;
    }
});