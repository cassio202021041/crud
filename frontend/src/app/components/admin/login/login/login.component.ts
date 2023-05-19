import { Token } from '@angular/compiler';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/model/loginModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit{

  loginForm!: FormGroup;

   
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,public loginService:LoginService) {}
  
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(

      {
        email: ['',[Validators.required, Validators.email]],
        senha: ['',[Validators.required]]
      }
      
    );
   
  }

  subimitLogin(){
      debugger
      let dadosLogin = this.loginForm.getRawValue() as loginModel;

      this.loginService.LoginUsuario(dadosLogin)
      .subscribe(
        token=> {
          debugger
          const nossoToken = token
           },
           erro => {

           }
        )

    }
    passLogin(){
      //
      this.router.navigate(['/pass'])
      
    }
 
 
}
