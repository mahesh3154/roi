import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://23.96.83.133:8080/';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http
      .get(`${this.url}admin/viewList`);
  }
  createEmployees(data) {
    return this.http
      .post(`${this.url}employee`, data);
  }
  getAllPosList() {
    return this.http
      .get(`${this.url}pos/list`);
  }
  submitPosList(data) {
    return this.http
      .post(`${this.url}pos`, data);
  }
  disablePostId(data) {
    return this.http
      .post(`${this.url}pos`, data);
  }
}
