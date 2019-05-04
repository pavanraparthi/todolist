export interface ITodo {
	_id: string,
	name: string,
	desc: string,
	priority: string,
	isCompleted: boolean
}

export interface IAppState {
	todos : ITodo[],
	selectedTodo ?: ITodo,
	lastUpdated ?: string
}