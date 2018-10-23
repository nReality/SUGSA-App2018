import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import { SponsorsPage } from '../sponsors/sponsors';
import { FavouritesPage } from '../favourites/favourites';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  tab1Root: any = SchedulePage;
  tab2Root: any = FavouritesPage;
  tab3Root: any = SpeakerListPage;
  tab4Root: any = SponsorsPage;
  tab5Root: any = AboutPage;
  mySelectedIndex: number;
  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex;
  }
}
