import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ChatComponent } from './messenger/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
