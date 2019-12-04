var gridContainer = document.querySelectorAll('.gallery__item');
var count = 0;
for (var i=0; i<gridContainer.length; i++){
    if (count === 12) {count = 0};
    if (count === 11) {gridContainer[i].classList.add('gallery__item--col-x2');};
    if (!(count === 0 || count === 2 || count === 8 || count === 10 || count === 11)) {
        gridContainer[i].classList.add('gallery__item--row-x2');
    }
    count++;
}
console.log(gridContainer);

