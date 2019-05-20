import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patients.service';
import { SelectItem } from 'primeng/api';

@Component({
    templateUrl: './addPatientSchedule.html',
    styleUrls: ['./modelboxes.css']

})
export class AddPatientSchedule {
    data: {};
    addScheduleForm: FormGroup;
    text: string;
    doctors: any;
    FormType: string;
    schedule: any;
    showValue: boolean;
    procedureName: any;
    patients:any;
    constructor(
        private patientService: PatientService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private formBuilder: FormBuilder) {
        this.doctors = [];
    }
    ngOnInit() {
         this.patientService.getAllPatients().subscribe(data => this.patients = data);

        this.patientService.getAllDoctors().subscribe(
            suc => {
                for (var i in suc) {
                    this.doctors.push({ label: suc[i].doctorname, value: suc[i].doctor_empid });
                }

            },
            err => {
                console.log(err);
            }
        );
        this.procedureName = [{ name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }]
        this.showValue = true;
        this.addScheduleForm = this.formBuilder.group({
            doctor_empid: ['', Validators.required],
            patient: ['', Validators.required],
            apptmt_type: ['', Validators.required],
            procedure_name: ['', Validators.required],
            date: ['', Validators.required],
            time: ['', Validators.required],
            patientId: ['', Validators.required]

        });

        //this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Schedule Consultation') {
            console.log(this.config);
            this.addScheduleForm.patchValue({
                patient: this.config.data.patientname,
                patientId: this.config.data.patientid,
                apptmt_type: 'consultation'

            });
        }
        if (this.FormType === 'Schedule Procedure') {
            //     console.log(this.config.data.patientname);
            this.addScheduleForm.patchValue({
                patient: this.config.data.patientname,
                patientId: this.config.data.patientid,
                apptmt_type: 'procedure'

            });
        }
    }
    addSchedule() {
        this.ref.close(this.addScheduleForm.value);

    }
}