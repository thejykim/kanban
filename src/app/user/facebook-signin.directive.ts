import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appFacebookSignin]'
})
export class FacebookSigninDirective {

  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
}
