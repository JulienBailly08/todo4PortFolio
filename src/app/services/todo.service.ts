import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
  
export class TodoService {

  private todos:[Todo] = [
    {
      _id: "",
      author: "",
      content: "",
      createdAt: "",
      title: "",
      updatedAt:""
    },
  ];

  constructor() {
    console.log(this.todos);
   }
}
