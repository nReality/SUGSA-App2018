import { Injectable } from '@angular/core';
import { Platform }   from 'ionic-angular';

@Injectable()
export class TweetShare {
  constructor(private platform: Platform) {
    this.platform = platform;
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
