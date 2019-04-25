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
  locations: any;
  admins: any = [];
  constructor(public dialogService: DialogService, public mainService: MainService) { }

  ngOnInit() {
    this.locations = [{ name: 'this.location.empid', address: 'this.location.empname', country: 'New York', state: 'New York', city: 'Rome', postralcode: 'this.location.phoneNumeber', email: 'this.location.email' }];
  }

  addLocation() {
    const ref = this.dialogService.open(AddLocations, {
      header: 'Add Locations',
      width: '70%',
      contentStyle: { "max-height": "650px" }
    });
    ref.onClose.subscribe(() => {
    });
  }
  addAdminModelbox() {
    const ref = this.dialogService.open(AddAdmin, {
      header: 'Add Admin',
      width: '70%',
      contentStyle: { "max-height": "650px" }
    });
    ref.onClose.subscribe((data) => {
      let postReq = {};
      postReq.name = data.name;
      postReq.email = data.email;
      postReq.phonenumber = data.phonenumber;
      this.mainService.addAdmins(postReq).subscribe(
        suc => {
          this.admins.push(postReq);

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
      width: '70%',
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
      contentStyle: { "max-height": "650px" },
      data: { data }

    });

    ref.onClose.subscribe(() => {

    });
  }
}
