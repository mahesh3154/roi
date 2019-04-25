import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patients.service';

@Component({
    templateUrl: './addSchedule.html',
    styleUrls: ['./modelboxes.css']

})
export class AddSchedule {
    data: {};
    addScheduleForm: FormGroup;
    text: string;
    doctors: any;
    FormType: string;
    schedule: any;
    showValue: boolean;
    constructor(
        private patientService: PatientService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.patientService.getAllDoctors().subscribe(data => this.doctors = data);
        this.showValue = true;
        this.addScheduleForm = this.formBuilder.group({
            doctor: ['', Validators.required],
            patient: ['', Validators.required],
            appointmentType: ['', Validators.required],
            procedureName: ['', Validators.required],
            date: ['', Validators.required],
            time: ['', Validators.required]
        });
        this.data = this.config.data.data;
        this.FormType = this.config.header;
        if (this.FormType === 'Edit Schedule') {
            console.log(this.data);
            this.schedule = this.data;
            this.addScheduleForm.patchValue({
                doctor: this.schedule.name,
                patient: this.schedule.patient,
                appointmentType: this.schedule.appointmentType,
                procedureName: this.schedule.procedureName,
                date: this.schedule.date,
                time: this.schedule.time,
            });
        }
    }
    addSchedule() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addScheduleForm.value));
    }
}