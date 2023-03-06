import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { animate, style, transition, trigger } from '@angular/animations';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('fade', [
      // transition('void => active', [ // using status here for transition
      //   style({ opacity: 0 }),
      //   animate(1000, style({ opacity: 1 }))
      // ]),
      transition('false => true', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteSucess = new EventEmitter<string>();
  @Output() update = new EventEmitter();

  idPicsum: number
  isDelete:boolean = false;
  animationDone:boolean = false;
  isInEditMode:boolean = false;
  
  constructor(private todoService:TodoService) {
    this.idPicsum = Math.floor(Math.random() * 85)
  }

  ngOnInit(): void {
  }

  goEdit() {
    this.isInEditMode = !this.isInEditMode;
  }

  effacerTodo() {
    this.todoService.deleteTodo(this.todo)
    this.onErase();
  }

  // Gestion des tempo des effets de suppression
  onErase()
  {
    this.isDelete = true;
    setTimeout(() => {
      this.animationDone = true;
    }, 1000);
    setTimeout(() => {
      this.deleteSucess.emit();
    }, 2000);
  }
  // Informer le parent des modfis existantes sur le component
  updated()
  {
    this.goEdit();
    this.update.emit();
  }



}
