import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private apiUrl = 'https://localhost:7240/api/v1/Auth/Login'; // ✅ Replace with your API URL

  constructor(private http:HttpClient) { }

  getLogin(req : any): Observable<any> {
    return this.http.post<any>(this.apiUrl, req);
  }
}
