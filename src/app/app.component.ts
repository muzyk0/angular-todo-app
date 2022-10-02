import { Component } from '@angular/core';
import {TodoModel} from "./models/todo-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-app';

  todoItems: TodoModel[] = [{
    title: 'angular introducing'
  }, {
    title: 'interface introducing'
  }]

  addTodo(title: string): void {
    this.todoItems.push({title})
  }
}
