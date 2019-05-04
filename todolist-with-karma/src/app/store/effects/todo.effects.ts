import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';
import { ETodoActions } from '../actions/todo.actions';
import { map, mergeMap } from 'rxjs/operators';
import * as TodoActions from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  @Effect()
  loadTodos$ = this.actions$
    .pipe(
      ofType(ETodoActions.GetTodos),
      mergeMap(() => this.todoService.getAll()
        .pipe(
          map(todos => (new TodoActions.OnTodoList(todos))),
        ))
      );

  @Effect()
  addTodo$ = this.actions$
    .pipe(
      ofType(ETodoActions.CreateTodo),
      mergeMap((action:TodoActions.CreateTodo) => this.todoService.addTodo(action.payload)
        .pipe(
          map(() => (new TodoActions.OnTodoCreated(action.payload))),
        ))
      );  
  
  @Effect()
  deleteTodo$ = this.actions$
    .pipe(
      ofType(ETodoActions.DeleteTodo),
      mergeMap((action:TodoActions.DeleteTodo) => this.todoService.deleteTodo(action.payload)
        .pipe(
          map(() => (new TodoActions.OnTodoDeleted(action.payload))),
        ))
      ); 

  @Effect()
  updateTodo$ = this.actions$
    .pipe(
      ofType(ETodoActions.UpdateTodo),
      mergeMap((action:TodoActions.UpdateTodo) => this.todoService.updateTodo(action.payload)
        .pipe(
          map(() => (new TodoActions.OnTodoUpdate(action.payload))),
        ))
      ); 

  
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}