import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ConfigService } from './services/config.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from './model/todo.model';
import * as todoActions from './store/actions/todo.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isConfigLoaded: boolean = false;
	constructor(private configService:ConfigService , private todoService:TodoService, private store:Store<IAppState>) {
		this.configService.getConfig()
			.subscribe((configData) =>{
				this.isConfigLoaded = true;
				this.todoService.setConfig(configData);
				this.store.dispatch(new todoActions.GetTodos());
			})
	}
}
