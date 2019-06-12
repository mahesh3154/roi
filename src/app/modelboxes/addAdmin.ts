import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
    templateUrl: './addAdmin.html',
    styleUrls: ['./modelboxes.css']

})
export class AddAdmin {
    data: {};
    addAdminForm: FormGroup;
    text: string;
    typeofEmployess: any;
    FormType: string;
    user: any;
    postReq: any;
    editmode : any;

    constructor(public ref: DynamicDialogRef,
        public mainService: MainService,
        public config: DynamicDialogConfig,
        private formBuilder: FormBuilder) { }
    ngOnInit() {
            this.editmode = false;

        this.addAdminForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phonenumber: ['', Validators.required]
        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Admin') {
            this.editmode = true;

            this.user = this.data;
            this.addAdminForm.patchValue({
                index: this.user.empid,
                name: this.user.empname,
                email: this.user.email,
                phonenumber: this.user.phoneNumeber
            });
        }
    }
    submitaddAdmin() {
        this.ref.close(this.addAdminForm.value);
    }
    update(data, id) {
        data.id = id
        this.ref.close(this.addAdminForm.value);
    }
    cancel() {
        this.ref.close(this.addAdminForm.value);
    }
}
