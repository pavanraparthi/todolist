import { IAppState, ITodo  } from '../../model/todo.model';

export const AppInitialState:IAppState = {
	todos: [] = [
	{
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
	  },
	  {
	  	_id:null,
	  	name:'test3',
	  	desc:'Test 3 Item',
	  	priority:'medium',
	  	isCompleted: false
	  }
	],
	selectedTodo:null,
	lastUpdated:(new Date()).toTimeString()
} 