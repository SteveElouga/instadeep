import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import {Auth, GithubAuthProvider, GoogleAuthProvider, user, User} from '@angular/fire/auth'
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$!: Observable<User | null>;
  private signMethod$ = new BehaviorSubject<string | null>('github')
  private _loading$ = new BehaviorSubject<boolean>(false);

  constructor(private fireAuth: AngularFireAuth, private router: Router, private auth: Auth) {
    this.currentUser$ = user(auth)
    console.log(auth.currentUser)
  }

  getLoading() {
    return this._loading$.asObservable()
  }

  signMethodAsObservable$() {
    return this.signMethod$.asObservable()
  }

  //login method
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then((res) => {
      this._loading$.next(true);
      localStorage.setItem('token', email)

      if (res.user?.emailVerified == true) {
        this.router.navigate(['dashboard'])
      } else {
        this.router.navigate(['/reset-email-sent'])
      }
      this._loading$.next(false);
    }, err => {
      alert('Something went wrong! Please check your email or pawword.')
      this._loading$.next(false);

      this.router.navigate(['/login'])
    })
  }

  //register method
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then((res) => {
      alert('Registration succesful')
      this.router.navigate(['/login'])
      this.sendEmailForVerification(res.user)
    }, err => {
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }

  //logout method
  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token')
      this.router.navigate([''])
    }, err => {
      alert(err.message)

    })
  }

  //forgot password
  forgotPassword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/reset-email-sent'])
    }, err => {
      alert('Something went wrong')
    })
  }

  //email verification
  sendEmailForVerification(user: any) {
    user.sendEmailVerification().then(() => {
      this.router.navigate(['/reset-email-sent'])
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail to your email')
    })
  }

  //sign in with google
  singInWithGoogle() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
      this.signMethod$.next('google')
      this.router.navigate(['/dashboard'])
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
    }, err => {
      alert(err.message)
    })
  }

  singInWithGithub() {
    return this.fireAuth.signInWithPopup(new GithubAuthProvider).then((res) => {
      this.signMethod$.next('github')
      this.router.navigate(['/dashboard'])
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
    }, err => {
      alert(err.message)
    })
  }
}
