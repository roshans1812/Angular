import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
    selector: 'my-login',
    templateUrl: './login.html'
})

export class LoginComponent implements OnInit{
    loginDetails: boolean = false;
    login: Login = new Login();
    loginForm: FormGroup;
    constructor(private fb: FormBuilder,private router:Router){}

    ngOnInit():void{
        this.loginForm = this.fb.group({
            userName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
            password:['', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
           
        })
        
    }

    save(){
       console.log(this.loginForm.value);
    }

    showDetails(){
        this.loginDetails =! this.loginDetails;
    }
    onBack()
    {
        this.router.navigate(['/home'])
    }
    onRegister()
    {
        this.router.navigate(['/register'])
    }
}