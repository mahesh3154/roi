import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
    templateUrl: './addLocations.html',
    styleUrls: ['./modelboxes.css']

})
export class AddLocations {
    data: {};
    addLocationForm: FormGroup;
    text: string;
    cities: any;
    FormType: string;
    location: any;
    editmode:boolean = false;
    constructor(private mainService: MainService, public ref: DynamicDialogRef, public config: DynamicDialogConfig, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.editmode =false;
        this.cities = [
            { label: 'New York', value: 'New York' },
            { label: 'Rome', value: 'Rome' },
            { label: 'London', value: 'London' },
            { label: 'Istanbul', value: 'Istanbul' },
            { label: 'Paris', value: 'Paris' }
        ];
        this.addLocationForm = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            country: ['', Validators.required],
            state: ['', Validators.required],
            city: ['', Validators.required],
            postalcode: ['', Validators.required],
            email: ['', Validators.required],

        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Clinic') {
            this.editmode = true;
            this.location = this.data;
            this.location.state = 'London'
            this.mainService.getSingleClinic(this.data['id']).subscribe(suc => {
                this.location = suc[0];
                this.addLocationForm.patchValue({
                    name: this.location.name,
                    address: this.location.address,
                    country: this.location.country,
                    state: this.location.state,
                    city: this.location.city,
                    postalcode: this.location.postralcode,
                    email: this.location.email

                });

            }, err => {
                //this.messageService.add({ severity: 'error', summary: 'Error In Request ' });
            }
            );
        }
    }
    addLocation() {
        this.ref.close(this.addLocationForm.value);
    }
     update() {
        this.ref.close(this.addLocationForm.value);
    } 
    cancel() {
        this.ref.close();
    }
}