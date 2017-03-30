import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  tab1: any = Page2;

  constructor(public navCtrl: NavController) {
    
  }

}
