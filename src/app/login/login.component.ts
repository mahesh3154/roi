import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  submitted: boolean;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }
  onSubmit(value) {
    this.auth.loginUser(value).subscribe(
      suc => {
      
     //   localStorage.setItem('token', 'Bearer ' + suc.token);
       this.router.navigate(['/settings'])

      },
      err => {
        console.log(err);
      }
    );

  }

}
