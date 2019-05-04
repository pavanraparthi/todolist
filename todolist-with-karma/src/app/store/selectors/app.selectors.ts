import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { IAppState, ITodo } from '../../model/todo.model';
import * as appFeatures from '../reducers/app.reducer';

export const getTodos = (state: IAppState): ITodo[] => state.todos;
export const selectedTodo = (state: IAppState) => state.selectedTodo;
export const lastUpdated = (state: IAppState) => state.lastUpdated;

export const selectTodos = createSelector(getTodos);
