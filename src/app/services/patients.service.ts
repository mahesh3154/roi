import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PatientService {
    auth: any;
    constructor(private http: HttpClient) {
        this.auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTU4MjkwNjEsImV4cCI6MTU1NTkxNTQ2MX0.bdbtn8zFuf9tbdd32HWkFXe2oZIip6WjNQChaf7bqKc';
    }
    getAllPatients() {
        return this.http
            .get('http://34.73.98.162:8080/patient/viewList', {
                headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: this.auth }
            });
    }
    getSinglePatientDetails(id) {
        return this.http
            .get(`http://34.73.98.162:8080/patient/info/${id}`, {
                headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: this.auth }
            });
    }
    addPatient(data) {
        return this.http
            .post('http://34.73.98.162:8080/patient', data, {
                headers: { 'Content-Type': 'application/json ', accept: 'application/json', Authorization: this.auth }

            });
    }

    addPayments(data, id) {
        return this.http
            .post(`http://34.73.98.162:8080/patient/payment/${id}`,
            data, {
                headers: { 'Content-Type': 'application/json ', accept: 'application/json', Authorization: this.auth }

            });
    }

    getAllPayments() {
        return this.http
            .get('http://34.73.98.162:8080/patient/payment/list/9164', {
                headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: this.auth }
            });
    }
    getAllDoctors() {
        return this.http
            .get('http://34.73.98.162:8080/schedule/doctorlist', {
                headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: this.auth }
            });
    }
}
