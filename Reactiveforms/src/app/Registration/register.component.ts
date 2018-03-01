import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router'
import { Register } from './register';

@Component({
    selector: 'my-register',
    templateUrl: './register.html'
})

export class RegisterComponent implements OnInit{
    showRegDetails:boolean = false;
    register: Register = new Register();
    registerForm: FormGroup;
    constructor(private fb: FormBuilder,private router:Router){}

    ngOnInit():void{
        this.registerForm = this.fb.group({
            firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(26)]],
            lastName:['', [Validators.required,Validators.minLength(3),Validators.maxLength(26)]],
            email:['',[Validators.required,Validators.pattern(/^[a-z0-9_]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]],
            cEmail:['',[Validators.required]],
            gender:['',[Validators.required]],
            country:['',[Validators.required]],
            terms:['',[Validators.required]]
        })
    }

    showDetails(){
        this.showRegDetails =! this.showRegDetails;
    }
    save(){
        console.log(this.registerForm.value);
    }

    onBack():void{
        this.router.navigate(['/home'])
    }
}