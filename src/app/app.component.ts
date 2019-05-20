import { Component, OnInit } from '@angular/core';
import { AddLocations } from './modelboxes/addLocations';
import { DialogService } from 'primeng/api';
import { AddAdmin } from './modelboxes/addAdmin';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  locations: any = [];
  admins: any = [];
  postReq: any = {};
  constructor(public dialogService: DialogService, public mainService: MainService) { }

  ngOnInit() {
    this.mainService.getAllLocations().subscribe(data => this.locations = data);
    this.mainService.getAdmins().subscribe(data => this.admins = data);
  }

  addLocation() {
    const ref = this.dialogService.open(AddLocations, {
      header: 'Add Locations',
      width: '70%',
      contentStyle: { "max-height": "700px" }
    });
    ref.onClose.subscribe((data) => {
      data.city = data.city.name;
      data.state = data.state.name;
      data.country = data.state.country
      this.mainService.addLocation(data).subscribe(
        suc => {
          this.locations.push(data);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  addAdminModelbox() {
    const ref = this.dialogService.open(AddAdmin, {
      header: 'Add Admin',
      width: '50%',
      contentStyle: { "max-height": "650px" }
    });
    ref.onClose.subscribe((data) => {
      this.mainService.addAdmins(data).subscribe(
        suc => {
          this.admins.push(data);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  editAdminModelbox(data) {
    const ref = this.dialogService.open(AddAdmin, {
      header: 'Add Admin',
      width: '50%',
      contentStyle: { "max-height": "650px" },
      data: { data }
    });
    ref.onClose.subscribe(() => {
    });
  }

  editLocation(data) {
    const ref = this.dialogService.open(AddLocations, {
      header: 'Edit Location',
      width: '70%',
      contentStyle: { "max-height": "700px" },
      data: { data }

    });

    ref.onClose.subscribe(() => {

    });
  }
}