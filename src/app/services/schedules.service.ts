import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private url = 'http://139.59.59.179:8888/';

  constructor(private http: HttpClient) {

  }

  getAllSchedules(data) {
    return this.http
      .get(`${this.url}schedule/${data.id}/${data.date}`);
  }
  addSchedules(data) {
    return this.http
      .post(`${this.url}admin`,
      data);
  }

}
