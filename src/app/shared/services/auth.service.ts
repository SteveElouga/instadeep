import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebase: AngularFireAuth, private router: Router) { }

  //login method
  login(email: string, password: string){
    this.firebase.signInWithEmailAndPassword(email, password).then(()=>{
      localStorage.setItem('token', email)
      this.router.navigate(['dashboard'])
    }, err=>{
      alert('Something went wrong! Please check your email or pawword.')

      this.router.navigate(['/login'])
    })
  }

  //register method
  register(email: string, password: string){
    this.firebase.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registration succesful')
      this.router.navigate(['/login'])
    }, err=>{
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }

  //logout method
  logout(){
    this.firebase.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate([''])
    }, err=>{
      alert(err.message)

    })
  }
}
