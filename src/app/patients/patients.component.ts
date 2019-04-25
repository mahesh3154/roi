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
  patients: any;
  cols: any;

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
      width: '70%',
      contentStyle: { "max-height": "650px" }
    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        console.log(patient);
      }
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
