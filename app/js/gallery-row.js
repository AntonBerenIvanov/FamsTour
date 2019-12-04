var gridContainer = document.querySelector('.grid-container');
var gridItem = gridContainer.querySelectorAll('.gallery__item');

// Рассчитываем количество строк в Grid и записываем это значение в style
var gridRow = Math.ceil(gridItem.length/12) * 4;
var gridContainerStyle = 'repeat(' + gridRow + ', 200px)'
gridContainer.style.gridTemplateRows = gridContainerStyle;

// Добавляем классы-модификаторы для элементов Grid по шаблону 
var count = 0;
for (var i=0; i<gridItem.length; i++){
    if (count === 12) {count = 0};
    if (count === 11) {gridItem[i].classList.add('gallery__item--col-x2');};
    if (!(count === 0 || count === 2 || count === 8 || count === 10 || count === 11)) {
        gridItem[i].classList.add('gallery__item--row-x2');
    }
    count++;
}


