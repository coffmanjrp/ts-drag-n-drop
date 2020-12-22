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
for (var _i = 0, empties_1 = empties; _i < empties_1.length; _i++) {
    var empty = empties_1[_i];
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
