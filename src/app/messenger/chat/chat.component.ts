import { MessagesService } from '../../messages.service';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

 messages = [];
 id:any;





  constructor(public messagesService: MessagesService) { 
    
  
  }

 

  

  ngOnInit(): void {
    this.messages = this.messagesService.getMessages();
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