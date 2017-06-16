import { Component } from '@angular/core';
import { IonicPage, NavController,
  NavParams, AlertController} from 'ionic-angular';



/**
 * Generated class for the NewGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html',

})
export class NewGamePage {
  output: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
      this.output = "Output"
  }
 GetInput(input){
   this.output = input
 }






/*    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Choose Player 1',
        message: "Enter a name for Player 1",
        inputs: [
          {
            name: 'p1',
            placeholder: 'Player 1'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();

    }*/
  }
