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
  details: any;
  patientId: any;
  displayDialog: boolean;
  patient: Patient = {};
  selectedCar: Patient;
  newPatient: boolean;
  patients: Patient[];
  cols: any;
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
      { field: 'invoice_type', header: 'Type' },
      { field: 'amount', header: 'Amount' },
    ];
    this.patientService.getAllPayments().subscribe(data => this.patients = data);
    this.patientService.getSinglePatientDetails(this.patientId).subscribe(data => this.details = data[0]);

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
    this.patient = {};
    this.displayDialog = true;
  }
  save() {
    let patients = [...this.patients];
    this.patientService.addPayments(this.patient, this.patientId).subscribe(
      suc => {
        console.log('teststtststs');
        this.patients.push(this.patient);

      },
      err => {
        console.log(err);
      }
    );

    this.displayDialog = false;
  }


}
