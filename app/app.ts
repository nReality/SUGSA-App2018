/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Events, Platform, Nav, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {ConferenceData} from './providers/conference-data';
import {UserData} from './providers/user-data';
import {TabsPage} from './pages/tabs/tabs';
import {TweetShare} from './providers/tweet-share';
import { SocialSharing } from 'ionic-native';

import * as firebase from 'firebase';

interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'build/app.html'
})
class ConferenceApp {
  @ViewChild(Nav) nav: Nav;
  appPages: PageObj[] = [
    { title: 'Schedule', component: TabsPage, icon: 'calendar' },
    { title: 'Favourites', component: TabsPage, icon: 'heart' },
    { title: 'Speakers', component: TabsPage, icon: 'contacts' },
    { title: 'Sponsors', component: TabsPage, icon: 'ribbon' },
    { title: 'About', component: TabsPage, icon: 'information-circle' }
  ];
 rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    platform: Platform,
    confData: ConferenceData
  ) {
    var config = {
      apiKey: "AIzaSyByXyIgWx9_jKNEYvnCpglS8tdY912fGRA",
      authDomain: "agile-africa-fa653.firebaseapp.com",
      databaseURL: "https://agile-africa-fa653.firebaseio.com",
      projectId: "agile-africa-fa653",
      storageBucket: "agile-africa-fa653.appspot.com",
      messagingSenderId: "816289217843"
    };

    firebase.initializeApp(config);

    platform.ready().then(() => {
      StatusBar.styleDefault();
      confData.load().then(() => {
        this.rootPage = TabsPage;
        this.menu.enable(false, 'mainmenu');
        Splashscreen.hide();
      });
    });
  }

  openPage(page: PageObj) {
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});
    } else {
      this.nav.setRoot(page.component);
    }
  }
}

ionicBootstrap(ConferenceApp, [ConferenceData, UserData, TweetShare, SocialSharing], {
  tabbarPlacement: 'bottom',
  prodMode : true
});
