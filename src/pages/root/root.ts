import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../page1/page1';
import { Page2 } from '../page2/page2';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-root',
  templateUrl: 'root.html'
})
export class RootPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any, under: boolean}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              public navCtrl: NavController) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1, under: true },
      { title: 'Page Two', component: Page2, under: true },
      { title: 'Page Three', component: Page3, under: false }
    ];
  }

  openPage(page) {
      if(page.under)
        this.nav.setRoot(page.component);
      else 
        this.navCtrl.push(page.component);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }
}
