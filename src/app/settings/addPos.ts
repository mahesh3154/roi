import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './addPos.html',
    styleUrls: ['./settings.component.css']

})
export class AddPos {
    data: {};
    addPosForm: FormGroup;
    FormType: string;
    user: any;
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.addPosForm = this.formBuilder.group({
            itemname: ['', Validators.required],
            amount: ['', Validators.required]
        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit POS') {
            this.user = this.data;
            this.addPosForm.patchValue({
                itemid: this.user.itemid,
                itemname: this.user.itemname,
                amount: this.user.amount
            });
        }
    }
    sumbmit() {
        this.ref.close(this.addPosForm.value);
    }
}