import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private url = 'http://139.59.59.179:8888/';

  constructor(private http: HttpClient) { }

  getAllBillings() {
    return this.http
      .get(`${this.url}billing/income/list`);
  }
  getAllExpenses() {
    return this.http
      .get(`${this.url}billing/expense/list`);
  }
  addExpenses(data) {
    return this.http
      .post(`${this.url}billing/expense`, data);
  }
}
