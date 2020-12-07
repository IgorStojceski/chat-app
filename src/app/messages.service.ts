import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class MessagesService {

private messages = [];
private messageUpdated = new Subject();

constructor(private http: HttpClient) {}


getMessages() {
this.http.get('http://localhost:3000/api/messages')
.subscribe((messagesData) => {
this.messages = messagesData.messages;
this.messageUpdated.next([...this.messages])
})
}

getPostUpdateListener() {
return this.messageUpdated.asObservable();

}

addMessages(id:any, messages:string){
const chatMessage = {id:id, messages:messages};
this.http.post('http://localhost:3000/api/messages', chatMessage)
.subscribe((response)=>{
console.log("response",response.message);
this.messages.push(chatMessage);
this.messageUpdated.next([...this.messages]);
})


}

// jBrzOlSAZVwhbynz MongoDB passs
}
