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
    value: string;
}
interface Problem {
    name: string;
    value: string;
}
interface Datasource {
    name: string;
    value: string;
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
            { label: 'Social Media', value: 'Social Media' },
            { label: 'Youtube', value: 'Youtube' },
            { label: 'Whatsapp', value: 'Whatsapp' },
            { label: 'Google Search', value: 'Google Search' },
            { label: 'Word Of Mounth (Reference)', value: 'Word Of Mounth (Reference)' },
            { label: 'Others', value: 'Others' }
        ];
        this.problems = [
            { label: 'Knee', value: 'Knee' },
            { label: 'Hip', value: 'Hip' },
            { label: 'Shouder', value: 'Shouder' },
            { label: 'ACL/Meniscus', value: 'ACL/Meniscus' },
            { label: 'Spine', value: 'Spine' },
            { label: 'Neck', value: 'Neck' },
            { label: 'Gastro', value: 'Gastro' },
            { label: 'Ancle', value: 'Ancle' },
            { label: 'Wrist', value: 'Wrist' },
            { label: 'Others, we do not treat', value: 'Others, we do not treat' }
        ];
        this.genders = [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' }
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
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Patient') {
            this.data = this.config.data.data;
            console.log(this.data);
            this.location = this.data;
            if (this.data) {
                this.patientService.getSinglePatientDetails(this.data['patientid']).subscribe(suc => {
                    this.location = suc[0]
                    console.log(this.location.problem)
                    this.addPatientsForm.patchValue({
                        patientname: this.location.patientname,
                        problem:  this.location.problem,
                        age: this.location.age,
                        gender: this.location.gender,
                        email: this.location.email,
                        phonenumber: this.location.phone_num,
                        additional_phonenum: this.location.additionalphonenum,
                        city_country: this.location.city_country,
                        source: this.location.source,
                        opinion: this.location.opinion,
                        remarks: this.location.remarks

                    });
                },
                    err => {
                        //this.messageService.add({ severity: 'error', summary: 'Error In Request ' });
                    }
                );
            }
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
    sumbmit(data) {
        this.ref.close(data);
    }
}