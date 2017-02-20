import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PromptComponent } from './prompt/prompt.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { UserDetail } from './user-detail/user-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
    {
      path: 'players',
      component: PromptComponent
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'results/:player1/:player2',
      component: ResultsComponent
    }
  ]) ],
  declarations: [ AppComponent, PromptComponent, HomeComponent, ResultsComponent, UserDetail, HomeComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
