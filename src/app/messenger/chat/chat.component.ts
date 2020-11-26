import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() recivedMessages = [];
  @Input() id: any;


  @Output() messageCreated: EventEmitter<any>



  constructor() { 
    
    this.messageCreated = new EventEmitter();
  }

 

  

  ngOnInit(): void {
  }


  onButtonSend(form: NgForm){

    if(form.invalid) {
      return;
    }
    const chatMessage = { id:this.id, message:form.value.messageChat};
    console.log(chatMessage.message)
    this.messageCreated.emit(chatMessage);
    form.reset();
    
  }

}