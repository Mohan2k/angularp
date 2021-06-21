import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlashMessageModule} from 'angular-flash-message';
import { AppComponent } from './app.component';
import { LoginActivityComponent } from './login-form/login-activity.component';
import { HelpLoginService } from './help-login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginActivityComponent
  ],
  imports: [
    BrowserModule,
    FlashMessageModule
  ],
  providers: [HelpLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
