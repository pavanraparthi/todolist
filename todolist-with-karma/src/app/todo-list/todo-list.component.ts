import { Component, OnInit } from '@angular/core';
import { ITodo } from '../model/todo.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../model/todo.model';
import { Observable } from "rxjs";
import * as appSelectors from '../store/selectors/app.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos : ITodo[] = [
	  /*{
	  	_id:null,
	  	name:'test1',
	  	desc:'Test 1 Item',
	  	priority:'low',
	  	isCompleted: true
	  },
	  {
	  	_id:null,
	  	name:'test2',
	  	desc:'Test 2 Item',
	  	priority:'high',
	  	isCompleted: false
	  }*/
  ]

  // todos$: Observable<ITodo[]>;


  constructor(private store:Store<IAppState>) { }

  ngOnInit() {
  	this.store.select('appReducer').subscribe((state:IAppState) => {
  		this.todos = state.todos
  	})
  }

}
