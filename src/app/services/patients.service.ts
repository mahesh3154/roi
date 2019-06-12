import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private url = 'http://206.189.132.23:8080/';

    auth: any;

    constructor(private http: HttpClient) {
    }
    getAllPatients() {
        return this.http
            .get(`${this.url}patient/viewList`, {
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
    }
    getSinglePatientDetails(id) {
        return this.http
            .get(`${this.url}patient/info/${id}`, {
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            });
    }
    addPatient(data) {
        return this.http
            .post(`${this.url}patient`, data, {
                headers: { 'Content-Type': 'application/json ', accept: 'application/json' }

            });
    }

    editPatient(data) {
        return this.http
            .put(`${this.url}patient`, data, {
                headers: { 'Content-Type': 'application/json ', accept: 'application/json' }

            });
    }
    addSchedules(data) {
        return this.http
            .post(`${this.url}patient/schedule/${data.apptmt_type}/${data.patientId}`, data);
    }
    addReminder(id, data) {
        return this.http
            .post(`${this.url}patient/reminder/${id}`,
            data);
    }
    addPayments(id, data) {
        return this.http
            .post(`${this.url}patient/payment/${id}`,
            data);
    }
    addnotes(id, data) {
        return this.http
            .post(`${this.url}patient/notes/${id}`,
            data);
    }
    getAllPayments(id) {
        return this.http
            .get(`${this.url}patient/payment/list/${id}`);
    }
    getAllDoctors() {
        return this.http
            .get(`${this.url}schedule/doctorlist`);
    }
}
