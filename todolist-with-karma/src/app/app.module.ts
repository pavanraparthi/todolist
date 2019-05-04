import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoService } from './services/todo.service';
import { ConfigService } from './services/config.service';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HeaderComponent } from './header/header.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/reducers/app.reducer';
import { TodoEffects } from './store/effects/todo.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    TodoEditorComponent
  ],

  
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({appReducer}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [ ConfigService , TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
