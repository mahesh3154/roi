import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { AddPatients } from '../modelboxes/addPatients';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any = [];
  cols: any;
  postReq: any = {};

  constructor(public dialogService: DialogService, private patientService: PatientService) { }
  ngOnInit() {
    this.cols = [
      { field: 'registered_on', header: 'Registerd On' },
      { field: 'patientname', header: 'Patient Name' },
      { field: 'opinion', header: 'Opinion' },
      { field: 'doctor', header: 'Owner' }
    ];
    return this.patientService.getAllPatients().subscribe(data => this.patients = data);

  }

  addPatientsModelBox() {
    const ref = this.dialogService.open(AddPatients, {
      header: 'Add Patients',
      width: '75%',
      contentStyle: { "max-height": "75%" }
    });

    ref.onClose.subscribe((patient) => {
      this.postReq = patient;
      this.postReq.gender = patient.gender.name;
      this.postReq.age = parseInt(patient.age);
      this.postReq.problem = patient.problem.name;
      this.postReq.city_country = patient.city_country.name;
      this.postReq.source = patient.source.name;

      return this.patientService.addPatient(this.postReq).subscribe(
        suc => {
          console.log(suc);
          this.patients.push(this.postReq);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  EditPatientsModelBox(data) {
    const ref = this.dialogService.open(AddPatients, {
      header: 'Edit Patients',
      width: '70%',
      contentStyle: { "max-height": "650px" },
      data: { data }
    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        console.log(patient);
      }
    });
  }
}
