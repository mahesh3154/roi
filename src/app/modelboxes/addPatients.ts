import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patients.service';

@Component({
    templateUrl: './addpatients.html',
    styleUrls: ['./modelboxes.css']

})
/*
interface Gender {
    name: string;
    code: string;
}
interface Problem {
    name: string;
    code: string;
}
interface Datasource {
    name: string;
    code: string;
}
*/
export class AddPatients {
    data: {};
    addPatientsForm: FormGroup;
    text: string;
    datasource: any;
    source: any;
    problems: any;
    problem: any;
    genders: any;
    gender: any;
    FormType: string;
    location: any;
    step1: boolean;
    step2: boolean;
    step3: boolean;
    postReq: any;
    patientresponse: any;
    constructor(public ref: DynamicDialogRef, private patientService: PatientService, public config: DynamicDialogConfig, private formBuilder: FormBuilder) {
        this.datasource = [
            { name: 'Social Media', code: '1' },
            { name: 'Youtube', code: '2' },
            { name: 'Whatsapp', code: '3' },
            { name: 'Google Search', code: '4' },
            { name: 'Word Of Mounth (Reference)', code: '5' },
            { name: 'Others', code: '6' }
        ];
        this.problems = [
            { name: 'Knee', code: '1' },
            { name: 'Hip', code: '2' },
            { name: 'Shouder', code: '3' },
            { name: 'ACL/Meniscus', code: '4' },
            { name: 'Spine', code: '5' },
            { name: 'Neck', code: '6' },
            { name: 'Ancle', code: '7' },
            { name: 'Wrist', code: '8' },
            { name: 'Others, we do not treat', code: '9' }
        ];
        this.genders = [
            { name: 'Male', code: '1' },
            { name: 'Female', code: '2' }
        ];
    }
    ngOnInit() {
        this.step1 = true;
        this.addPatientsForm = this.formBuilder.group({
            patientname: ['', Validators.required],
            problem: ['', Validators.required],
            age: ['', Validators.required],
            gender: ['', Validators.required],
            email: ['', Validators.required],
            phonenumber: ['', Validators.required],
            additional_phonenum: ['', Validators.required],
            city_country: ['', Validators.required],
            source: ['', Validators.required],
            opinion: ['', Validators.required],
            remarks: ['', Validators.required]
        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Patient') {
            console.log(this.data);
            this.location = this.data;
            this.addPatientsForm.patchValue({
                patientname: this.location.patientname,
                problem: this.location.problem,
                age: this.location.age,
                gender: this.location.gender,
                email: this.location.email,
                phonenumber: this.location.phonenumber,
                additional_phonenum: this.location.additional_phonenum,
                city_country: this.location.city_country,
                source: this.location.source,
                opinion: this.location.opinion,
                remarks: this.location.remarks
            });
        }
    }
    handleClick() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addPatientsForm.value));
    }
    step(id) {
        if (id === 2) {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
        }
        if (id === 3) {
            this.step1 = false;
            this.step2 = false;
            this.step3 = true;

        }
    }
    sumbmit() {
        this.ref.close(this.addPatientsForm.value);
    }
}