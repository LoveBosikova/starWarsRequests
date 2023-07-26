const form = document.querySelector('form');
console.log(form.elements.number);

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

form.addEventListener('submit', (e) => {
   e.preventDefault();
    if (form.elements.searchObject.value == 'failure') {
        document.querySelector('.valErr').textContent = 'Пустой запрос не ведёт к свету. Сделай выбор';
    } else {
        document.querySelector('.valErr').textContent = '';
    }

    console.log(form.elements.number.value);

    if (form.elements.number.value == '') {
        document.querySelector('.numErr').textContent = 'Пустота порождает пустоту. Введи число';
    } else {
        document.querySelector('.numErr').textContent = '';
    }

 });