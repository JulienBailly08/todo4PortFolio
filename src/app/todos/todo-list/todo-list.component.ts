import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { query, stagger, animate, style, transition, trigger } from '@angular/animations';

const animListTodo =
  transition(':enter', [
    query('.card-visible', [
      style({opacity:0, transform:'translateX(-100px)'}),
      stagger(30, [
        animate('1.5s cubic-bezier(0.35,0,0.25,1)',
        style({opacity:1,transform:'none'}))
      ])
    ])
  ])
const makeBoard = trigger('makeboard',[animListTodo])

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [makeBoard],
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] | undefined;
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

  // fire lors de la supression
  reloadTodo($event:any)
  { 
    this.todoList = this.todoService.getTodos();
  }

  // fire lors de l'edition d'une carte
  reloadPage()
  {
    this.todoList = this.todoService.getTodos();
  }

}
