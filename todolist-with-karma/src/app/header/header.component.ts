import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../model/todo.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title: string = "Todo List App";
  private lastUpdated: string = (new Date()).toTimeString();
  constructor(private state:Store<IAppState>) { }

  ngOnInit() {
  	this.state.select('appReducer').subscribe((state:IAppState) => {
  		this.lastUpdated = state.lastUpdated;
  	})
  }

}
