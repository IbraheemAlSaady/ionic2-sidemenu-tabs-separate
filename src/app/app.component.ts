import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { RootPage } from '../pages/root/root';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RootPage;

  // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Page One', component: Page1 },
    //   { title: 'Page Two', component: Page2 }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page, under: boolean) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   if(under)
  //     this.nav.setRoot(page.component);
  //   else this.navCtrl.push(page);
  // }
}
