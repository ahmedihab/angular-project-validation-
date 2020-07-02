import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators }from '@angular/forms'
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  myform:FormGroup = new FormGroup({
    'firstName': new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(16)]),
    'lastName': new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(16)]),
    'email':new FormControl (null,[Validators.required,Validators.email]),
    'password':new FormControl (null,Validators.required)
  })

  getData(mydata){
    console.log(mydata)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
