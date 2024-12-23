import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 contactform:FormGroup=new FormGroup({
  emailadress:new FormControl(null,[Validators.required,Validators.email]),
  texarea:new FormControl(null,[Validators.required])
 })

 submitcontact(form:FormGroup){
      console.log(form.value)
 }
}
