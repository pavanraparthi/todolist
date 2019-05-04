import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { IAppState , ITodo } from '../model/todo.model';
import { Store, select } from '@ngrx/store';
import * as TodoActions from '../store/actions/todo.actions';


@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {

  dataBind = {
    _id:'',
    priority:'low',
    itemInfo:{
      name:'',
      desc:''
    },
    isCompleted:false
  }

  todoItem = this.fb.group({
  	itemInfo: this.fb.group({
  		name: ['', Validators.required],
  		desc: ['', Validators.required]
  	}),
  	priority:['']
  });

  isInEditMode:boolean = false;

  priorityList: string[] = ['low','medium','high'];
  formTitle: string = 'Create a todo item';
  isEdited:boolean = false;

  constructor(private fb:FormBuilder, private store:Store<IAppState>) { 
  	this.todoItem.controls['priority'].setValue(this.priorityList[0],{onlySelf:true});
    this.store.select('appReducer').subscribe((state:IAppState) => {
      if(state.selectedTodo != null){
        this.isInEditMode = true;
        this.formTitle = 'Update todo item';
        this.dataBind._id = state.selectedTodo._id;
        this.dataBind.priority = state.selectedTodo.priority;
        this.dataBind.itemInfo.name = state.selectedTodo.name;
        this.dataBind.itemInfo.desc = state.selectedTodo.desc;
        this.dataBind.isCompleted = state.selectedTodo.isCompleted;
      }else{
        this.isInEditMode = false;
        this.dataBind = {
          _id:'',
          priority:'low',
          itemInfo:{
            name:'',
            desc:''
          },
          isCompleted:false
        }

        this.formTitle = 'Create a todo item'
      }
    })
    this.todoItem.valueChanges
      .subscribe(form => {
        if(!this.isInEditMode) return;
        this.isEdited = true;
      })
  }

  ngOnInit() {
  }

  onSubmit() {
    let todoItem:ITodo = {
      _id: this.dataBind._id,
      name: this.dataBind.itemInfo.name,
      desc: this.dataBind.itemInfo.desc,
      priority: this.dataBind.priority,
      isCompleted: this.dataBind.isCompleted
    }
    if(this.isInEditMode){
      this.store.dispatch(new TodoActions.UpdateTodo(todoItem))
    }else {
      this.store.dispatch(new TodoActions.CreateTodo(todoItem))
    }
  }

  onToggleCompleteState() {
    this.dataBind.isCompleted = ! this.dataBind.isCompleted;
  }

}
