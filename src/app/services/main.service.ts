import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private url = 'http://206.189.132.23:8080/';

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

  editAdmin(data, id) {
    return this.http
      .put(`${this.url}clinic/info/${id}`,
      data);
  }
  addLocation(data) {
    return this.http
      .post(`${this.url}clinic`,
      data);
  }

  editLocation(data, id) {
    return this.http
      .put(`${this.url}admin/info/${id}`,
      data);
  }
  getAllLocations() {
    return this.http
      .get(`${this.url}clinic/viewList`);
  }
  getAllClinics() {
    return this.http
      .get(`${this.url}clinic/list`);
  }
  getSingleClinic(id) {
    return this.http
      .get(`${this.url}clinic/info/${id}`);
  }
  selectclinic(id) {
    return this.http.post(`${this.url}clinic/setclinic/${id}`, '');
  }
  changePassword(data) {
    return this.http.post(`${this.url}employee/changepw`, data);
  }
}
