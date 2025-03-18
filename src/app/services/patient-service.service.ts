import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private apiUrl = environment.baseUrl + environment.apiVersion + "Auth/Login";
  private url = environment.baseUrl + environment.apiVersion + "Patient/GetPatientDetails";
  constructor(private http:HttpClient) { }

  getLogin(req : any): Observable<any> {
    return this.http.post<any>(this.apiUrl, req);
  }

  getPatientDetails() : Observable<any>{
    return this.http.get<any>(this.url);
  }
}