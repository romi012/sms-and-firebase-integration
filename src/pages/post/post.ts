import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import {SMS} from "@ionic-native/sms";

/**
 * Generated class for the Post page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 export class Post{

  phoneNumber:string;
  message:string;
 constructor()
{}
 }

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  text :Post= {
    "phoneNumber": "03400376028",
    "message": ""

  };
  //post :Post=new Post();
  constructor(public navCtrl: NavController,public af: AngularFireDatabase , private toastCtrl: ToastController,public sms: SMS) {
  }
submit(){
  this.af.list('/posts').push(this.text);
this.text=new Post();
	this.navCtrl.parent.select(0)
}
  sendTextMessage(text:Post):void {
    //SMS.send('416123456', 'Hello world!');
    this.sms.send(this.text.phoneNumber, this.text.message).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
  }


}
