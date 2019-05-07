import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddEmployee } from './addEmployee';
import { AddPos } from './addPos';
import { DialogService } from 'primeng/api';
import { EmployeeService } from '../services/employee.service';
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [DialogService]
})
export class SettingsComponent implements OnInit {
    employees: any = [];
    pos: any = [];

    constructor(public dialogService: DialogService, private employeeService: EmployeeService) { }
    ngOnInit() {
        this.employeeService.getAllEmployees().subscribe(suc => {
            this.employees = suc;
        },
            err => {
                console.log(err);
            }
        );
        this.employeeService.getAllPosList().subscribe(suc => {
            this.pos = suc;
        },
            err => {
                console.log(err);
            }
        );
    }
    addEmployeeModelBox() {
        const ref = this.dialogService.open(AddEmployee, {
            header: 'Add Employee',
            width: '70%',
            contentStyle: { "max-height": "650px" }
        });

        ref.onClose.subscribe((data) => {
            data.role = data.role.label
            this.employeeService.createEmployees(data).subscribe(
                suc => {
                    this.employees.push(data);
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

    EditEmployeeModelBox(data) {
        const ref = this.dialogService.open(AddEmployee, {
            header: 'Edit Employee',
            width: '70%',
            contentStyle: { "max-height": "650px" },
            data: { data }
        });

        ref.onClose.subscribe(() => {
        });
    }
    addPos() {
        const ref = this.dialogService.open(AddPos, {
            header: 'Add Pos',
            width: '70%',
            contentStyle: { "max-height": "650px" },

        });

        ref.onClose.subscribe((data) => {
            this.employeeService.submitPosList(data).subscribe(
                suc => {
                    this.pos.push(data);
                },
                err => {
                    console.log(err);
                }
            );
        });
    }
    editPos(data) {
        const ref = this.dialogService.open(AddPos, {
            header: 'Edit POS',
            width: '70%',
            contentStyle: { "max-height": "650px" },
            data: { data }

        });

        ref.onClose.subscribe((data) => {
            this.employeeService.submitPosList(data).subscribe(
                suc => {
                    this.pos.push(data);
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

}
