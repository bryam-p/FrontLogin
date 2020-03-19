import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: '',
    firstName: '',
    lastName:''
    }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.user)
    localStorage.setItem('datos',JSON.stringify(this.user));
    this.router.navigate(['/login'])
    /*
    this.authService.register(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('email', res.email)
      },
      err => console.log(err)
    )*/

  }
}
