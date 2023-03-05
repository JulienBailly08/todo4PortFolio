import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] | undefined;
  @Input() createTodo: any
  @Input() hasToUpdate:any

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['hasToUpdate'].isFirstChange())
    {
      if (changes['hasToUpdate'].currentValue !== changes['hasToUpdate'].previousValue)
      {
        this.todoList = this.todoService.getTodos();
      }
    }
   ;
  }

  getTodos()
  {
    return this.todoList;
  }

  // va servir sur le supression
  reloadTodo($event:any)
  { }

  reloadPage()
  {
    console.log("on refresh les values de la page")
  }

}
