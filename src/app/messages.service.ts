import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

private messages = [];

getMessages() {
  return this.messages
};

addMessages(id:any, messages:string){
  const chatMessage = {id:id, messages:messages};
  this.messages.push(chatMessage);
} 

  constructor() { }
}
