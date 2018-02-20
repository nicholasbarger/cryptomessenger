import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Message } from '../../models/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messages: Array<Message>;
  
  constructor(public navCtrl: NavController) {
    this.messages = new Array<Message>(
      new Message('hey, whats up?', 'me'),
      new Message('working on my project.', 'mj'),
      new Message('cool', 'me')
    );
  }

}
