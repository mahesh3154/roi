import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedules.service';
import { PatientService } from '../services/patients.service';
import { DialogService } from 'primeng/api';
import { AddPatientSchedule } from '../modelboxes/addPatientSchedule';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  doctors: any = [];
  selectedDoctor: any;
  selectedDoctorId: any;
  date: any;
  dateFormat: any;
  schedules: any = [];
  constructor(private scheduleService: ScheduleService,
    public dialogService: DialogService,
    private patientService: PatientService,
    private messageService: MessageService) { }
  ngOnInit() {

    this.dateFormat = new Date();
    this.patientService.getAllDoctors().subscribe(
      suc => {
        for (var i in suc) {
          this.doctors.push({ label: suc[i].doctorname, value: suc[i].doctor_empid });
        }
        this.selectedDoctor = this.doctors[0];
        this.selectedDoctorId = this.doctors[0].value;

        this.getAllSchedules();
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllSchedules() {
    let date = this.dateFormat;
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let finalDate = yyyy + '-' + mm + '-' + dd;
    this.scheduleService.getAllSchedules({ date: finalDate, id: this.selectedDoctorId }).subscribe(
      suc => {
        this.schedules = suc;
        this.schedules.morning = [];
        this.schedules.afternoon = [];
        this.schedules.evening = [];

        for (var i in this.schedules)
        var ndate = new Date(this.schedules[i].time);
      //  console.log(this.schedules)
        var hr = ndate.getHours();
        var h = hr % 12;
        console.log(ndate)

        if (hr < 12) {
          this.schedules.morning.push(suc[i])
        }
        else if (hr >= 12 && hr <= 17) {
          this.schedules.afternoon.push(suc[i])

        }
        else if (hr >= 17 && hr <= 24) {

          this.schedules.evening.push(suc[i])
        }
        // this.schedules = suc
        if (this.schedules.message == "No schedules.") {
          this.schedules = [];
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllDropdownSchedules(doctor) {
    console.log(doctor);
    let date = this.dateFormat;
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let finalDate = yyyy + '-' + mm + '-' + dd;
    this.scheduleService.getAllSchedules({ date: finalDate, id: doctor.value }).subscribe(
      suc => {
        this.schedules = suc;
        if (this.schedules.message == "No schedules.") {
          this.schedules = [];
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  addScheduleModelBox() {
    const ref = this.dialogService.open(AddPatientSchedule, {
      header: 'Schedule Consultation',
      width: '50%',
      contentStyle: { "max-height": "650px" }

    });

    ref.onClose.subscribe((patient) => {
      if (patient) {
        this.patientService.addSchedules(patient).subscribe(
          suc => {
        this.messageService.add({severity:'success', summary:'Sucessfully Added ', detail:'Via MessageService'});

          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }

}