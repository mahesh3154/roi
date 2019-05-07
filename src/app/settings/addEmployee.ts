import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './addEmployee.html',
    styleUrls: ['./settings.component.css']
})
export class AddEmployee {
    data: {};
    addEmployeeForm: FormGroup;
    text: string;
    typeofEmployess: any;
    FormType: string;
    user: any;
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.typeofEmployess = [{ id: 1, logo: 'fas fa-stethoscope', label: 'doctor' },
        { id: 2, logo: 'fas fa-headset', label: 'Front Desk' },
        { id: 3, logo: 'fas fa-briefcase', label: 'Manager' },
        { id: 4, logo: 'fas fa-bullhorn', label: 'Marketing' },
        { id: 5, logo: 'fas  fa-file-invoice', label: 'Accounts' }];
        this.addEmployeeForm = this.formBuilder.group({
            role: ['', Validators.required],
            empname: ['', Validators.required],
            email: ['', Validators.required],
            phonenumber: ['', Validators.required]
        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Employee') {
            this.user = this.data;
            this.addEmployeeForm.patchValue({
                index: this.user.empid,
                empname: this.user.empname,
                email: this.user.email,
                phonenumber: this.user.phoneNumeber,
                role: this.user.role
            });
        }
    }
    addEmployee() {
        this.ref.close(this.addEmployeeForm.value);
    }
}
