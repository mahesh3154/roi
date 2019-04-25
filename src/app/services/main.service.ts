import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
    auth: any;
  constructor(private http: HttpClient) {
    this.auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTU4MjkwNjEsImV4cCI6MTU1NTkxNTQ2MX0.bdbtn8zFuf9tbdd32HWkFXe2oZIip6WjNQChaf7bqKc';

  }

  addAdmins(data) {
    return this.http
      .post(`http://34.73.98.162:8080/admin`,
      data, {
        headers: { 'Content-Type': 'application/json ', accept: 'application/json', Authorization: this.auth }

      });
  }

}
