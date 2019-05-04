import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ITodo } from '../model/todo.model';

@Injectable()
export class TodoService {

  _config:any;

  constructor (private http: HttpClient ) {}

  getAll() {
    return this.http.get(this._config.baseUrl+this._config.getAllTodos);
  }

  addTodo(todo:ITodo){
  	return this.http.post(this._config.baseUrl + this._config.addTodo, todo)
  }

  deleteTodo(todo:ITodo) {
  	return this.http.request('DELETE', this._config.baseUrl + this._config.deleteTodo, {
  		headers: new HttpHeaders({
	        'Content-Type': 'application/json',
	    }),
	    body: todo
  	})
  }

  updateTodo(todo:ITodo) {
  	return this.http.post(this._config.baseUrl + this._config.updateTodo, todo);	
  }

  setConfig (data:any) {
  	this._config = data;
  }
}