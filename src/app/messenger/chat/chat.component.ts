import { MessagesService } from '../../messages.service';
import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages:any;
 @Input() id:any;
 private messageSub: Subscription;

  constructor(public messagesService: MessagesService) { 
    
  }

 
  ngOnInit(): void {
    this.messages = this.messagesService.getMessages();
   this.messageSub =  this.messagesService.getPostUpdateListener().
    subscribe((messageUpdated)=> {
      this.messages = messageUpdated;
      console.log(this.messages)
    });
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }


  onButtonSend(form: NgForm){

    if(form.invalid) {
      return;
    }
    this.messagesService.addMessages(this.id, form.value.messageChat)
    console.log(this.messages)
    form.reset();
    
  }

}