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
    employees: any;
    pos: any;

    constructor(public dialogService: DialogService, private employeeService: EmployeeService) { }
    ngOnInit() {
       return this.employeeService.getAllEmployees().subscribe(data => this.employees = data );
    }
    addPatientsModelBox() {
        const ref = this.dialogService.open(AddEmployee, {
            header: 'Add Employee',
            width: '70%',
            contentStyle: { "max-height": "650px" }
        });

        ref.onClose.subscribe(() => {
        });
    }

    EditEmployeeModelBox(data) {
        const ref = this.dialogService.open(AddEmployee, {
            header: 'Edit Employee',
            width: '70%',
            contentStyle: { "max-height": "650px" },
            data: {data}
        });

        ref.onClose.subscribe(() => {
        });
    }
    addPos() {
        const ref = this.dialogService.open(AddPos, {
            header: 'Add Pos',
            width: '70%',
            contentStyle: { "max-height": "650px" }
        });

        ref.onClose.subscribe(() => {

        });
    }

}
