import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  messages = [];

  onMessageAdded(chatMessage) {
    this.messages.push(chatMessage);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
