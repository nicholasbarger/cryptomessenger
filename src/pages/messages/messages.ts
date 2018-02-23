import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Message } from '../../models/message';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  messages: Array<Message>;
  
  constructor(public navCtrl: NavController) {
    this.messages = new Array<Message>(
      new Message('hey, whats up?', 'me'),
      new Message('working on my project.', 'mj'),
      new Message('cool', 'me'),
      new Message('when will it be ready?', 'mj')
    );
  }

}
