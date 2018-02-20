import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message',
  templateUrl: 'message.html'
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message;

  isMe: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.isMe = this.message.from == 'me';
  }

}
