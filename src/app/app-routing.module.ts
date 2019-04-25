import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { BillingComponent } from './billing/billing.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsViewDetailsComponent } from './patients/patients-viewDetails.component';

import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: '/settings', pathMatch: 'full' },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'patients-viewdetails/:id', component: PatientsViewDetailsComponent },
    { path: 'settings', component: SettingsComponent }




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
