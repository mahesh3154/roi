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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AddEmployee } from './settings/addEmployee';
import { AddPos } from './settings/addPos';
import { AddLocations } from './modelboxes/addLocations';
import { AddPatients } from './modelboxes/addPatients';
import { AddSchedule } from './modelboxes/addSchedule';
import { AddAdmin } from './modelboxes/addAdmin';
import { AddPatientSchedule } from './modelboxes/addPatientSchedule';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ForgotPassword } from './modelboxes/forgotPassword';
import { ChangePassword } from './modelboxes/changePassword';


import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { RatingModule } from 'primeng/rating';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import {ListboxModule} from 'primeng/listbox';

import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { PatientService } from './services/patients.service';
import { MainService } from './services/main.service';
import { AuthService } from './services/auth.service';
import { BillingService } from './services/billing.service';

import { DialogService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { SelectlocationsComponent } from './selectlocations/selectlocations.component';
import {MessageService} from 'primeng/api';

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
    AddPatientSchedule,
    PatientsViewDetailsComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    SelectlocationsComponent,
    ForgotPassword,
    ChangePassword
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextareaModule,
    ListboxModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    TabViewModule,
    TableModule,
    RadioButtonModule,
    DropdownModule,
    DynamicDialogModule,
    ToastModule,
    DialogModule,
    ProgressSpinnerModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    SplitButtonModule
  ],
  entryComponents: [
    AddEmployee,
    AddPos,
    AddLocations,
    AddPatients,
    AddSchedule,
    AddAdmin,
    AddPatientSchedule,
    ChangePassword,
    ForgotPassword
  ],
  providers: [EmployeeService, PatientService, MainService, AuthService, AuthGuard,MessageService, DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
