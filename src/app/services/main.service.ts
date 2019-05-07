import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private url = 'http://23.96.83.133:8080/';

  constructor(private http: HttpClient) {

  }

  getAdmins() {
    return this.http
      .get(`${this.url}admin/viewList`);
  }
  addAdmins(data) {
    return this.http
      .post(`${this.url}admin`,
      data);
  }
  addLocation(data) {
    return this.http
      .post(`${this.url}clinic`,
      data);
  }
  getAllLocations() {
    return this.http
      .get(`${this.url}clinic/viewList`);
  }
}
