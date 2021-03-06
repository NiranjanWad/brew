import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ConnectToPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect-to',
  templateUrl: 'connect-to.html',
})
export class ConnectToPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectToPage');
  }

  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }

}
