import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedules.service';
import { PatientService } from '../services/patients.service';
import { DialogService } from 'primeng/api';
import { AddPatientSchedule } from '../modelboxes/addPatientSchedule';

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
  schedules: any;
  constructor(private scheduleService: ScheduleService,
    public dialogService: DialogService,
    private patientService: PatientService) { }
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
      width: '70%',
      contentStyle: { "max-height": "650px" }

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

}