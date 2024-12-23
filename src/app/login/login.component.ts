import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showpassword=false
loginform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email,Validators.minLength(3)]),
  password:new FormControl(null,[Validators.required,Validators.minLength(3),
    Validators.pattern(/^[0-9]{3,5}[a-zA-Z]{3,5}$/)
  ])
})

submitlogin(form:FormGroup){
  localStorage.setItem('autherized','true')
 console.log(form.value)
}

disappearpassword(){
  this.showpassword=!this.showpassword
}
}
