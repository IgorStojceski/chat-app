import { MessagesService } from '../../messages.service';
import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
selector: 'app-chat',
templateUrl: './chat.component.html',
styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

messages:any;

form: FormGroup;
@Input() id:any;
private messageSub: Subscription;

constructor(public messagesService: MessagesService) {

}


ngOnInit(): void {
this.form = new FormGroup({
'messageChat': new FormControl(null, {validators:[Validators.required, Validators.minLength(1)]})
})
this.messages = this.messagesService.getMessages();
this.messageSub = this.messagesService.getPostUpdateListener().
subscribe((messageUpdated)=> {
this.messages = messageUpdated;
console.log(this.messages)
});
}

ngOnDestroy() {
this.messageSub.unsubscribe();
}


onButtonSend(){

if(this.form.invalid) {
return;
}
this.messagesService.addMessages(this.id, this.form.value.messageChat)
console.log(this.messages)
this.form.reset();

}

}
