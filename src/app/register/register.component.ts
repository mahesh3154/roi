import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 /*
  userform: FormGroup;
  submitted: boolean;
  genders: any;

  description: string;
  constructor(private fb: FormBuilder) { }
*/
  ngOnInit() {

  }

  onSubmit(value: string) {
  //  this.submitted = true;
  ///  this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }


}
