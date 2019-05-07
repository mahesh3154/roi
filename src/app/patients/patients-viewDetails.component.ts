import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { AddSchedule } from '../modelboxes/addSchedule';
import { Patient } from '../models/patients.model';
@Component({
  selector: 'app-patients',
  templateUrl: './patients-viewDetails.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsViewDetailsComponent implements OnInit {
  details: any = {};
  patientId: any;
  displayDialog: boolean;
  patient: any = {};
  selectedCar: Patient;
  newPatient: boolean;
  patients: any = [];
  cols: any;
  rating:number;
  constructor(
    private patientService: PatientService,
    public dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.patientId = this.route.snapshot.paramMap.get('id');
    this.patients = [];
    this.cols = [
      { field: 'invoice_date', header: 'Invoice Date' },
      { field: 'payment_method', header: 'Type' },
      { field: 'amount', header: 'Amount' },
    ];
    this.patientService.getAllPayments().subscribe(data => this.patients = data);
    this.patientService.getSinglePatientDetails(this.patientId).subscribe(
     suc => {
        this.details= suc[0];
      },
      err => {
        console.log(err);
      }
    );

  }


  addScheduleConsultationModelBox() {
    const ref = this.dialogService.open(AddSchedule, {
      header: 'Schedule Consultation',
      width: '70%',
      contentStyle: { "max-height": "650px" },
      data: this.details,

    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        console.log(patient);
      }
    });
  }
  addScheduleProcedureModelBox() {
    const ref = this.dialogService.open(AddSchedule, {
      header: 'Schedule Procedure',
      width: '70%',
      contentStyle: { "max-height": "650px" },
      data: this.details
    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        console.log(patient);
      }
    });
  }
  showDialogToAdd() {
    this.newPatient = true;
    this.displayDialog = true;
  }
  save(patient) {
    this.patientService.addPayments(this.patient, this.patientId).subscribe(
      suc => {
        this.patients.push(patient);

      },
      err => {
        console.log(err);
      }
    );

    this.displayDialog = false;
  }


}
