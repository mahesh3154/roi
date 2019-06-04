import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-selectlocations',
  templateUrl: './selectlocations.component.html',
  styleUrls: ['./selectlocations.component.css']
})
export class SelectlocationsComponent implements OnInit {
  clinics: any;
  selectedLocation: any;
  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    return this.mainService.getAllClinics().subscribe( suc => {
console.log('clinics', suc)  ;
      this.clinics = suc
      },
      err => {
        console.log(err);
      }
    );

  }
  selectClinic(data) {
    console.log(data.id);
    this.mainService.selectclinic(data.id).subscribe(
      suc => {
        // this.patients.push(patient);
        localStorage.setItem('location', data.id);

        this.router.navigate(['/settings'])
      },
      err => {
        console.log(err);
      }
    );
  }

}
