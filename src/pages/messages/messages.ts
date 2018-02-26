import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Message } from '../../models/message';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { MessageProvider } from '../../providers/message';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  channel: string;
  isChannelEdit: boolean;
  me: string;
  newMessage: string;
  messages = new Array<Message>();
  
  constructor(
    public navCtrl: NavController, 
    private messageProvider: MessageProvider,
    private socket: Socket, 
    private uniqueDeviceId: UniqueDeviceID) {
      
    // set socket events
    this.socket.connect();
    this.receiveMessage().subscribe((message: Message) => {
      this.messages.push(message);
    });
    
    // set user information
    this.uniqueDeviceId.get().then((uuid: any) => this.me = uuid);
    this.channel = 'welcome';
    
    // load previous messages for this channel
    this.messageProvider.get(this.channel).subscribe((data: any) => {
        this.messages = data.Items;
        console.log(this.messages);
    });
  }
  
  changeChannel(): void {
    this.isChannelEdit = true;
  }

  sendMessage(): void {
    var message = new Message(this.channel, this.newMessage, this.me);
    this.socket.emit('send-message', message);
    this.newMessage = '';
  }
  
  receiveMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', function(message) {
        console.log('message received from server');
        observer.next(message);
      });
    });
  }
}
