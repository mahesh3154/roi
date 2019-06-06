import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { AddPatients } from '../modelboxes/addPatients';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any = [];
  cols: any;
  postReq: any = {};
  patientDetails: any;
  constructor(private messageService: MessageService, public dialogService: DialogService, private patientService: PatientService) { }
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
      width: '75%',
    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        console.log(patient)
        this.postReq = patient;
       

        return this.patientService.addPatient(this.postReq).subscribe(
          suc => {
            console.log(suc);
            this.patients.push(suc[0]);
            this.messageService.add({ severity: 'success', summary: 'Patient Added Sucessfully ' });

          },
          err => {
            this.messageService.add({ severity: 'error', summary: 'Error In Request ' });
          }
        );
      }
    });

  }
  EditPatientsModelBox(data) {
    //console.log('aaaaaaaaaaaaa', this.patientDetails[0])
    const ref = this.dialogService.open(AddPatients, {
      header: 'Edit Patient',
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
