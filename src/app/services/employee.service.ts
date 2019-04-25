import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http
      .get('http://34.73.98.162:8080/admin/viewList', {
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTQ1Mzg2NTgsImV4cCI6MTU1NDYyNTA1OH0.WlaLIR_4udhxV-7eH1Untx1qcRj_xGpbwCAe6turcIU' }
      });
  }
}
