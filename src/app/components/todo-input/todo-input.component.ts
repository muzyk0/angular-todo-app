import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoTitle: string = ''
  @Output() todoItemSubmit = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  submitTodo(): void {
    this.todoItemSubmit.emit(this.todoTitle)
    this.todoTitle = ''
  }
}
