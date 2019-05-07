import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private registerUrl = 'http://23.96.83.133:8080/';
    constructor(private http: HttpClient,  private router: Router) { }

    loginUser(user) {
        return this.http
            .post(`${this.registerUrl}employee/login`, user);
    }

    logoutUser() {
        localStorage.removeItem('token');
        this.router.navigate(['/events']);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }
}
