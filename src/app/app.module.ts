import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ScheduleComponent } from './schedule/schedule.component';
import { BillingComponent } from './billing/billing.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsViewDetailsComponent } from './patients/patients-viewDetails.component';
import { SettingsComponent } from './settings/settings.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

import { AddEmployee } from './settings/addEmployee';
import { AddPos } from './settings/addPos';
import { AddLocations } from './modelboxes/addLocations';
import { AddPatients } from './modelboxes/addPatients';
import { AddSchedule } from './modelboxes/addSchedule';
import { AddAdmin } from './modelboxes/addAdmin';


import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { PatientService } from './services/patients.service';
import { MainService } from './services/main.service';

import { DialogService } from 'primeng/api';

import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    BillingComponent,
    PatientsComponent,
    SettingsComponent,
    AddEmployee,
    AddPos,
    AddAdmin,
    AddLocations,
    AddPatients,
    AddSchedule,
    PatientsViewDetailsComponent,
    SidebarComponent,
    TopbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    TabViewModule,
    TableModule,
    RadioButtonModule,
    DropdownModule,
    DynamicDialogModule,
    DialogModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AddEmployee,
    AddPos,
    AddLocations,
    AddPatients,
    AddSchedule,
    AddAdmin
  ],
  providers: [EmployeeService, PatientService, MainService,  DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
