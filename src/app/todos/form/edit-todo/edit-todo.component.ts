import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  @Input()
  todo4Form!: Todo
  @Output() editTodo = new EventEmitter<string>();
  @Output() retour = new EventEmitter<string>();
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder, private todoService:TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      _id:[this.todo4Form._id],
      title: [this.todo4Form.title,Validators.required],
      content: [this.todo4Form.content, [Validators.required, Validators.minLength(8)]],
      author:[this.todo4Form.author]
    })
  }

  onSubmit()
  {
    this.editTodo.emit();
    this.todoService.updateTodo(this.todoForm.value)
  }

  goBack()
  {
    console.log("emit depuis le form");
    this.retour.emit();
  }
  
  get title() {
    return this.todoForm.get('title');
  }
  get content() {
    return this.todoForm.get('content');
  }

}
