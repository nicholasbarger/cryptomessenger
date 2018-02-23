import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MessagesPage } from '../messages/messages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagesPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
