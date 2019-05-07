import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './addLocations.html',
    styleUrls: ['./modelboxes.css']

})
export class AddLocations {
    data: {};
    addLocationForm: FormGroup;
    text: string;
    cities2: any;
    FormType: string;
    location: any;
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.cities2 = this.cities2 = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.addLocationForm = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            country: ['', Validators.required],
            state: ['', Validators.required],
            city: ['', Validators.required],
            postralcode: ['', Validators.required],
            email: ['', Validators.required],

        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Location') {
            console.log(this.data);
            this.location = this.data;
            this.addLocationForm.patchValue({
                name: this.location.name,
                address: this.location.address,
                country: this.location.country,
                state: this.location.state,
                city: this.location.city,
                postralcode: this.location.postralcode,
                email: this.location.email

            });
        }
    }
    addLocation() {
        this.ref.close(this.addLocationForm.value);
    }
}