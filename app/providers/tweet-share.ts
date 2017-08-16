import { Injectable } from '@angular/core';
import { Platform }   from 'ionic-angular';

@Injectable()
export class TweetShare {
  constructor(private platform: Platform) {
    this.platform = platform;
  }

  shareViaTwitterWithSpeakerAndConference(message, speakers: Array<any>) {
    var speakerstring = ""
    for (var speaker of speakers) {
      if (speaker && speaker.twitter !== '@someone') {
        speakerstring += " " + speaker.twitter;
      }
    }
    this.shareViaTwitterWithConference(message + speakerstring);
  }

  shareViaTwitterWithConference(message) {
    this.shareViaTwitter(message + ' @SAAFOSTofficial', null, null)
  }

  shareViaTwitter(message, image, link) {
    var pl = (<any>window).plugins
    if (pl == null) {
      window.open(`https://twitter.com/intent/tweet?text=` + message);
      return;
    }

    this.platform.ready().then(() => {
      if (pl.socialsharing) {
        try {
          pl.socialsharing.shareViaTwitter(message, image, link);
        } catch(error) {
          console.error(error);
        }
      }
    });
  }
}
