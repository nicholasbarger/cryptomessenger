import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { MyApp } from './app.component';

import { SocketIoModule } from 'ng-socket-io';
import { ComponentsModule } from '../components/components.module';

import { AboutPage } from '../pages/about/about';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageProvider } from '../providers/message';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MessagesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot({ url: 'https://052bf6b11baa4fd8bd789288361a9557.vfs.cloud9.us-east-1.amazonaws.com', options: {}})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MessagesPage,
    TabsPage
  ],
  providers: [
    UniqueDeviceID,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider
  ]
})
export class AppModule {}
