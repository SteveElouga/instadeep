import { Injectable } from '@angular/core';
import {} from '@angular/fire'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebase: AngularFireAuth) { }
}
