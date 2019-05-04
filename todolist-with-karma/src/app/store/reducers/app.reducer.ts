import { AppInitialState } from '../state/todo.state';
import { TodoActions , ETodoActions } from '../actions/todo.actions';
import { IAppState , ITodo } from '../../model/todo.model';

// import { GetTodos, OnTodoCreated, UpdateTodo, DeleteTodo } from '../actions/todo.actions';

export function appReducer(
	state = AppInitialState,
	action: TodoActions
	):IAppState {
	switch (action.type) {
		case ETodoActions.OnTodoCreated:
			return {
				...state,
				todos:state.todos.concat(state.todos.splice(state.todos.length,0,action.payload)),
				lastUpdated:(new Date()).toTimeString()
			}
		case ETodoActions.OnTodoList:
			return {
				...state,
				todos:action.payload,
				lastUpdated:(new Date()).toTimeString()
			}	
		case ETodoActions.SelectTodo:
			{
				return {
					...state,
					selectedTodo:action.payload
				}
			}
			break;	
		case ETodoActions.OnTodoUpdate:
			{
				return {
					...state,
					todos: state.todos.map((todo) => {
						if(todo._id == action.payload._id){
							todo = action.payload
						}
						return todo;
					}),
					selectedTodo:null,
					lastUpdated:(new Date()).toTimeString()
				}
			}
			break;
		case ETodoActions.OnTodoDeleted:
			{
				return {
					...state,
					todos: state.todos.filter((todo) => {
						if(todo._id != action.payload._id)
							return todo;
					}),
					lastUpdated:(new Date()).toTimeString()
				}
			}
			break;		
		default:
			// code...
			return state;
			break;
	}
};