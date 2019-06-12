import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://206.189.132.23:8080/';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http
      .get(`${this.url}admin/viewList`);
  }
  createEmployees(data) {
    return this.http
      .post(`${this.url}employee`, data);
  }
   editEmployees(data, id) {
    return this.http
      .put(`${this.url}employee/info/${id}`, data);
  }
  getAllPosList() {
    return this.http
      .get(`${this.url}pos/list`);
  }
  submitPosList(data) {
    return this.http
      .post(`${this.url}pos`, data);
  }
  disablePosId(data, id) {
    return this.http
      .post(`${this.url}pos/info/${id}`, data);
  }
  editPos(data, id) {
   return this.http
      .put(`${this.url}pos/info/${id}`, data);
  }
  getBasicInfo() {
    return this.http
      .get(`${this.url}clinic/basicinfo`);
  }
  editBasicInfo(data) {
    return this.http
      .put(`${this.url}clinic/basicinfo`, data);
  }

}
