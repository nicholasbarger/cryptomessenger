import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../models/message';

@Injectable()
export class MessageProvider {

  apiUrl: string;
  
  constructor(public http: HttpClient) {
    this.apiUrl = 'https://osg1c8du17.execute-api.us-east-1.amazonaws.com/dev/';
  }

  get(channel: string): Observable<any> {
    const url = this.apiUrl + '/message/' + channel;
    return this.http.get<any>(url);
  }
}
