import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  @Input()
  todo4Form!: Todo
  @Output() updateSucess = new EventEmitter<string>();
  response$:any;
  erreurPourInfo = null;
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService, private router: Router) { }
  
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['',Validators.required],
      content: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit()
  {
    console.log(this.todoForm.value);
    this.updateSucess.emit();
  }
  
  get title() {
    return this.todoForm.get('title');
  }
  get content() {
    return this.todoForm.get('content');
  }

}
