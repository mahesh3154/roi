import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { AddSchedule } from '../modelboxes/addSchedule';
import { Patient } from '../models/patients.model';
import { MessageService } from 'primeng/api';

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
  rating: number;
  notes: any = "";
  showNotes: boolean = false;
  showCalender: boolean = false;
  enternotes: any;
  calender: any;
  constructor(
    private patientService: PatientService,
    public dialogService: DialogService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.showNotes = false;
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
        this.details = suc[0];
        this.notes = suc[1];

      },
      err => {
        console.log(err);
      }
    );

  }


  addScheduleConsultationModelBox() {
    const ref = this.dialogService.open(AddSchedule, {
      header: 'Schedule Consultation',
      width: '50%',
      data: this.details,

    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        this.patientService.addSchedules(patient).subscribe(
          suc => {
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
  addScheduleProcedureModelBox() {
    const ref = this.dialogService.open(AddSchedule, {
      header: 'Schedule Procedure',
      width: '50%',
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



  addNotes() {
    this.showNotes = true;
  }

  closeNotes() {
    this.showNotes = false;
  }

  submitNotes() {
    this.patientService.addnotes(this.patientId, { 'text': this.enternotes }).subscribe(
      suc => {
        this.notes.notes.push(suc);
        this.showNotes = false;
        this.messageService.add({ severity: 'success', summary: 'Notes Added Sucessfully' });

      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Notes Added Failed' });
      }
    );
  }
  addCalender() {
    this.showCalender = true;
  }

  addReminder() {
    this.patientService.addReminder(this.patientId, { 'reminder_time': this.calender }).subscribe(
      suc => {
        this.notes.notes.push(suc);
        this.messageService.add({ severity: 'success', summary: 'Reminder Added Sucessfully' });
    this.showCalender = false;

      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Reminder Added Failed' });
      }
    );
  }
}
