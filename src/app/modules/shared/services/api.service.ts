import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    get<T>(url: string, params: HttpParams | { [param: string]: string | string[]; } = {}) {
        return this.http.get<T>(url, {
            params
        });
    }

    post<T>(url: string, data: {}) {
        return this.http.post<T>(url, data);
    }

    put<T>(url: string, data: {}) {
        return this.http.put<T>(url, data);
    }

    delete<T>(url: string) {
        return this.http.delete<T>(url);
    }
}
