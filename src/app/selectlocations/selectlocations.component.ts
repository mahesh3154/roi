import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-selectlocations',
  templateUrl: './selectlocations.component.html',
  styleUrls: ['./selectlocations.component.css']
})
export class SelectlocationsComponent implements OnInit {
    clinics: any;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    return this.mainService.getAllClinics().subscribe(data => this.clinics = data);

  }
  selectClinic(data){
    console.log(data.id);
     this.mainService.selectclinic(data.id).subscribe(
      suc => {
       // this.patients.push(patient);

      },
      err => {
        console.log(err);
      }
    );
  }

}
