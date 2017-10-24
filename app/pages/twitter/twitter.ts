import { Component, NgZone } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { PopoverController, ViewController, Platform } from 'ionic-angular';
import { InAppBrowser} from 'ionic-native';
declare var window:any;

@Component({
  templateUrl: 'build/pages/twitter/twitter.html'
})
export class TwitterPage {


  constructor(public platform: Platform, conferenceData: ConferenceData, private zone: NgZone) {


  }
  ionViewDidEnter(){
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("tweets.html",'_blank','toolbar=yes,toolbarposition=bottom,location=no');


      });



  }

  ngAfterViewInit() {/*
    this.zone.runOutsideAngular(() => {
      console.log("trying twitter source")
      !function(d,s,id){
              var js: any,
                  fjs=d.getElementsByTagName(s)[0],
                  p='https';
                  js=d.createElement(s);
                  js.id=id;
                  js.src=p+"://platform.twitter.com/widgets.js";
                  fjs.parentNode.insertBefore(js,fjs);
          }
          (document,"script","twitter-wjs");
      });
*/
      setTimeout(function(){
        /*
        this.zone.runOutsideAngular(() => {
        window.twttr.widgets.createTimeline(
          {
            sourceType: 'url',
            url: 'https://twitter.com/twitterdev'
          },
          document.getElementById("twitter-conf-timeline"),
          {
            height: 400,
            chrome: "nofooter",
            linkColor: "#820bbb",
            borderColor: "#a80000"
          }

        );
        });
        */
      }, 20000);
  }

}
