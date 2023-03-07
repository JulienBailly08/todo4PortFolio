import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { TodoService } from 'src/app/services/todo.service';

const AnimationDelete = transition('false => true', [
  animate('1s ease-out', style({ opacity: 0 }))
]);
const createAnim = transition(':enter', [
  style({ opacity: 0 }),
  animate('1s ease-in', style({ opacity: 1 }))
])
const easeInOut = [
  state(
    'true',
    style({ opacity: 0 })
  ),
  state(
    'false',
    style({ opacity: 1 })
  ),
  transition('true=>false', [animate('0.5s ease-in')]),
  transition('false=>true', [animate('0.5s ease-out')])
]


const supression = trigger('AnimDelete', [AnimationDelete]);
const creation = trigger('come2Life', [createAnim]);
const edition = trigger('edition',easeInOut)

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [supression,edition],
})

export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteSucess = new EventEmitter<string>();
  @Output() update = new EventEmitter();
  @Output() creation = new EventEmitter();

  idPicsum: number
  isDelete:boolean = false;
  isInEditMode: boolean = false;

  constructor(private todoService:TodoService) {
    this.idPicsum = Math.floor(Math.random() * 85)
  }

  ngOnInit(): void {
  }

  goEdit() {
    this.isInEditMode = true;
  }

  goBack() {
    this.isInEditMode = false;
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
      this.deleteSucess.emit();
    }, 1000);
  }
  // Informer le parent des modifs existantes sur le component
  updated()
  {
    this.goBack();
    this.update.emit();
  }



}
