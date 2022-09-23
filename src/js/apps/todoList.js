//  Todo draggable list

export class TodoList {
  constructor() {
    this.dragged = null;
  }

  dragStart(event) {
    this.dragged = event.target;
  }

  dragEnd(event) {
    this.dragged.classList.remove("dragging");
  }

  dragEnter(event) {
    event.currentTarget.classList.add("drop");
  }

  dragLeave(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    event.currentTarget.classList.remove("drop");
  }
  drop(event) {
    event.preventDefault();

    this.dragged.parentNode.removeChild(this.dragged);
    event.target.appendChild(this.dragged);
    event.target.classList.remove("drop");
  }

  allowDrop(event) {
    event.preventDefault();
  }
}
