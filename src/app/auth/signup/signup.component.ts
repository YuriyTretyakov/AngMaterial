import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  maxDate:Date =new Date();
  minDate:Date=new Date();
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.maxDate;
    this.minDate.setFullYear(this.minDate.getFullYear()-18);
  }

  onSubmit(form:NgForm)
  {
    this.authService.registerUser({
      email:form.value.email,
      password:form.value.password
    });
  }
  

}
