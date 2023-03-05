import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] | undefined;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodosSource();
  }

  getTodos()
  {
    return this.todoList;
  }

  reloadTodo($event:any)
  { }
  
  reloadPage()
  {
    console.log("on refresh les values de la page")
  }

}
