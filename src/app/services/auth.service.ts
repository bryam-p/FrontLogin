import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private URL = 'https://bictiamusic.herokuapp.com/'

  constructor(
    private http:HttpClient,
    private router : Router
    ) { }

  register(user){
    //return this.http.post<any>(this.URL+'/register',user)
  }

  login(user){
    //return this.http.post<any>(this.URL+'/login',user)
  }

  loggedIn(){
    if (localStorage.getItem('datos')) {
      return true
    }else{
      return false
    }
  }

  logout() {
    localStorage.removeItem('datos')
    this.router.navigate(['/register'])
  }
}
