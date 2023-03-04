import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  ArrayTodos = [
    {
      _id: "",
      author: "",
      content: "",
      createdAt: "",
      title: "",
      updatedAt:""
    },
  ];
  constructor() { }
}
