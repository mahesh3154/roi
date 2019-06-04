import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { BillingComponent } from './billing/billing.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsViewDetailsComponent } from './patients/patients-viewDetails.component';
import { SelectlocationsComponent } from './selectlocations/selectlocations.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard], redirectTo: '/settings', pathMatch: 'full' },
    { path: 'schedule', canActivate: [AuthGuard],  component: ScheduleComponent },
    { path: 'select-location',   component: SelectlocationsComponent },

    { path: 'billing', canActivate: [AuthGuard], component: BillingComponent },
    { path: 'patients',canActivate: [AuthGuard], component: PatientsComponent },
    { path: 'patients-viewdetails/:id', canActivate: [AuthGuard], component: PatientsViewDetailsComponent },
    { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent },
    { path: 'login', component: LoginComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
