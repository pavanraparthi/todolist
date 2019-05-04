import { Component, OnInit , Input } from '@angular/core';
import { ITodo } from '../model/todo.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../model/todo.model';
import * as TodoActions from '../store/actions/todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  itemObj: ITodo;
  constructor(private store:Store<IAppState>) { }

  ngOnInit() {

  }

  onItemSelect() {
    this.store.dispatch(new TodoActions.SelectTodo(this.itemObj));
  }

  deleteItem() {
    this.store.dispatch(new TodoActions.DeleteTodo(this.itemObj));
  }

}
