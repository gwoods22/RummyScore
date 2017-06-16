import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewGamePage } from '../new-game/new-game';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  NewGameLink() {
    this.navCtrl.push(NewGamePage);
  }
  AboutLink() {
    this.navCtrl.push(AboutPage);
  }

}
