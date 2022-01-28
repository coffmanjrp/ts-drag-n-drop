const fill = document.querySelector('.fill') as HTMLDivElement;
const empties = document.querySelectorAll(
  '.empty'
) as NodeListOf<HTMLDivElement>;

function dragStart(this: HTMLDivElement) {
  this.className += ' hold';

  setTimeout(function (this: HTMLDivElement) {
    this.className = 'invisible';
  }, 0);
}

function dragEnd(this: HTMLDivElement) {
  this.className = 'fill';
}

function dragOver(e: MouseEvent) {
  e.preventDefault();
}

function dragEnter(this: HTMLDivElement, e: MouseEvent) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave(this: HTMLDivElement) {
  this.className = 'empty';
}

function dragDrop(this: HTMLDivElement) {
  this.className = 'empty';
  this.append(fill);
}

empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
