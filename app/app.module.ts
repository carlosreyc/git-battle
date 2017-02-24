import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './_helpers/fakebackend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';



import { AppComponent }  from './app.component';
import { PromptComponent } from './_components/prompt/prompt.component';
import { ResultsComponent } from './_components/results/results.component';
import { HomeComponent } from './_components/home/home.component';
import { UserDetail } from './_components/user-detail/user-detail.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/auth.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
    {
      path: 'players',
      component: PromptComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'results/:player1/:player2',
      component: ResultsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    { path: '**', redirectTo: '' }
  ]) ],
  declarations: [ AppComponent, PromptComponent, HomeComponent, ResultsComponent, UserDetail, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard, AuthenticationService, fakeBackendProvider, MockBackend,BaseRequestOptions]
  
})
export class AppModule { }
