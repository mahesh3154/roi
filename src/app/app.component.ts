import { Component, OnInit } from '@angular/core';
import { AddLocations } from './modelboxes/addLocations';
import { ChangePassword } from './modelboxes/changePassword';

import { DialogService } from 'primeng/api';
import { AddAdmin } from './modelboxes/addAdmin';
import { MainService } from './services/main.service';
import { MessageService } from 'primeng/api';

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
  items: any = [];
  display: any = false;
  constructor(public dialogService: DialogService, public mainService: MainService, private messageService: MessageService) { }

  ngOnInit() {


    this.items = [
      { label: 'My Profile', icon: 'roi-user-icon', routerLink: ['/myprofile'] },
      {
        label: 'Change Password', icon: 'roi-key-icon', command: () => {
          this.changePassword();
        }
      },
      { label: 'Logout', icon: 'roi-logout-icon', routerLink: ['/logout'] }
    ];
  }

  addLocation() {
    const ref = this.dialogService.open(AddLocations, {
      header: 'Add Locations',
      width: '70%',
    });
    ref.onClose.subscribe((data) => {
      this.mainService.addLocation(data).subscribe(
        suc => {
          this.locations.push(data);
          this.messageService.add({ severity: 'success', summary: 'Location Added Sucessfully' });
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
    });
    ref.onClose.subscribe((data) => {
      this.mainService.addAdmins(data).subscribe(
        suc => {
          this.admins.push(suc);
          this.messageService.add({ severity: 'success', summary: 'Admin Added Sucessfully' });

        },
        err => {
          console.log(err);
        }
      );
    });
  }
  changePassword() {
    const ref = this.dialogService.open(ChangePassword, {
      header: 'Change Password',
      width: '50%',
    });
    ref.onClose.subscribe((data) => {
      if (data) {
        this.mainService.changePassword(data).subscribe(
          suc => {
            this.messageService.add({ severity: 'success', summary: 'Password Changed Sucessfully' });
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }

  editAdminModelbox(data) {
    const ref = this.dialogService.open(AddAdmin, {
      header: 'Edit Admin',
      width: '50%',
      data: { data }
    });
    ref.onClose.subscribe(() => {
      let id = data.id;
      this.mainService.editAdmin(data, id).subscribe(
        suc => {
          this.messageService.add({ severity: 'success', summary: 'Location Added Sucessfully' });
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  editLocation(data) {
    const ref = this.dialogService.open(AddLocations, {
      header: 'Edit Clinic',
      width: '70%',
      data: { data }

    });

    ref.onClose.subscribe((data) => {
      console.log(data);
      let id = data.id;
      this.mainService.editLocation(data, id).subscribe(
        suc => {
          this.messageService.add({ severity: 'success', summary: 'Location Added Sucessfully' });
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  showSideBar() {

    this.display = true
    this.mainService.getAllLocations().subscribe(data => this.locations = data);
    this.mainService.getAdmins().subscribe(data => this.admins = data);
  }
}
