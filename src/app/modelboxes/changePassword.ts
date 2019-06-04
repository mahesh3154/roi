import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './changePassword.html',
    styleUrls: ['./modelboxes.css']

})
export class ChangePassword {
    changePasswordForm: FormGroup;
    constructor(public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.changePasswordForm = this.formBuilder.group({
            current_pw: ['', Validators.required],
            new_pw: ['', Validators.required],
            confirm_new_pw: ['', Validators.required]


        });
    }
    updatePassword() {
        this.ref.close(this.changePasswordForm.value);

    }
}