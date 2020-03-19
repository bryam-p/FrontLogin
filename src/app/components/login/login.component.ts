import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email:'',
    password: ''
  }

  constructor( 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user)
    if ( localStorage.getItem('datos')) {
      this.router.navigate(['/home'])
    }else{
      alert('No hay datos')
    }
    /*
    this.authService.login(this.user)
    .subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('email',res.email)
        this.router.navigate(['/home'])
      },
      err => console.log(err)
    )*/
  }
}
