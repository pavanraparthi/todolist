import { Action } from '@ngrx/store';
import { ITodo } from '../../model/todo.model';

export enum ETodoActions {
	GetTodos = 'getTodos',
	OnTodoList = 'onTodoList',
	CreateTodo = 'createTodo',
	OnTodoCreated = 'onTodoCreated',
	SelectTodo = 'selectTodo',
	UpdateTodo = 'updateTodo',
	OnTodoUpdate = 'onTodoUpdate',
	DeleteTodo = 'deleteTodo',
	OnTodoDeleted = 'onTodoDeleted'
}

export class GetTodos implements Action {
	public readonly type = ETodoActions.GetTodos;
}

export class OnTodoList implements Action {
	public readonly type = ETodoActions.OnTodoList;
	constructor( public payload:any){

	}
}

export class CreateTodo implements Action {
	public readonly type = ETodoActions.CreateTodo;
	constructor( public payload:ITodo){

	}
}

export class OnTodoCreated implements Action {
	public readonly type = ETodoActions.OnTodoCreated;
	constructor( public payload:ITodo){

	}
}

export class SelectTodo implements Action {
	public readonly type = ETodoActions.SelectTodo;
	constructor(public payload:ITodo){
	}
}

export class UpdateTodo implements Action {
	public readonly type = ETodoActions.UpdateTodo;
	constructor(public payload:ITodo){
	}
}

export class OnTodoUpdate implements Action {
	public readonly type = ETodoActions.OnTodoUpdate;
	constructor(public payload:ITodo){
	}
}

export class DeleteTodo implements Action {
	public readonly type = ETodoActions.DeleteTodo;
	constructor(public payload:ITodo){

	}
}

export class OnTodoDeleted implements Action {
	public readonly type = ETodoActions.OnTodoDeleted;
	constructor(public payload:ITodo){

	}
}

export type TodoActions = OnTodoList | GetTodos | CreateTodo | OnTodoCreated | UpdateTodo | OnTodoUpdate | SelectTodo | DeleteTodo | OnTodoDeleted;
