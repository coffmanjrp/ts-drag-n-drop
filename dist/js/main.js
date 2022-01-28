"use strict";
var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');
function dragStart() {
    this.className += ' hold';
    setTimeout(function () {
        this.className = 'invisible';
    }, 0);
}
function dragEnd() {
    this.className = 'fill';
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
empties.forEach(function (empty) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
