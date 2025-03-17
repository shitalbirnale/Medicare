import { Component } from '@angular/core';
import { PatientServiceService } from './services/patient-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medicare';
  emailId :string ="";
  password :string ="";
  logInresponse : any;
  
  constructor(private patientService : PatientServiceService, private router: Router){}

  Login(emailId : string, password : string){
    
    var requestPayload =
    {
      "Email" : emailId,
      "Password" : password
    };
    if(requestPayload != null && requestPayload != undefined){
      if(requestPayload.Email != null && requestPayload.Email !="" && requestPayload.Password != null && requestPayload.Password !=""){
        var response = this.patientService.getLogin(requestPayload).subscribe((data) => {
          this.logInresponse = data;
          sessionStorage.setItem('jwtToken', data);
          console.log('Successfully fetched the response ', data);
          this.router.navigate(['patientList']);
        },(error)=>{
          console.error('Error fetching users', error);
        })
      }
    }
  }

}
