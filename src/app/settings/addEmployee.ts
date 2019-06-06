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
    disableButton: any = true
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.disableButton = true

        this.typeofEmployess = [{ id: 1, logo: 'roi-stethoscope-icon', label: 'Doctor' },
        { id: 2, logo: 'roi-reception-icon', label: 'Front Desk' },
        { id: 3, logo: 'roi-briefcase-icon', label: 'Manager' },
        { id: 4, logo: 'roi-promotion-icon', label: 'Marketing' },
        { id: 5, logo: 'roi-budget-icon', label: 'Accounts' }];
        this.addEmployeeForm = this.formBuilder.group({
            
            role: ['', Validators.required],
            empname: ['', Validators.required],
            email: ['', Validators.required],
            phonenumber: ['', Validators.required]
        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Employee') {
            this.disableButton = false;
            this.user = this.data;
            this.addEmployeeForm.patchValue({
                index: this.user.empid,
                empname: this.user.empname,
                email: this.user.email,
                phonenumber: this.user.phonenumber,
                role: this.user.role
            });
        }
    }
    addEmployee(data) {
        this.ref.close(data);

    }
    cancel() {
        this.ref.close();

    }
    update(data, id) {
        data.id = id
        this.ref.close(data);

    }
    diable (id){
                this.ref.close(id);

    }
}
