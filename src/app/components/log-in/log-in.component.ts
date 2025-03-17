import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServiceService } from 'src/app/services/patient-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  title = 'Medicare';
  logInresponse : any;
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required , Validators.email]),
    password : new FormControl('', [Validators.required , Validators.minLength(6)])
  });
  isFailure :boolean =false;
  errorMessage : string ="";
  constructor(private patientService : PatientServiceService, private router: Router){}

    Login(){
    if(this.loginForm.valid){
        var response = this.patientService.getLogin(this.loginForm.value).subscribe((data) => {
          this.logInresponse = data;
          sessionStorage.setItem('jwtToken', data);
          console.log('Successfully fetched the response ', data);
          this.router.navigate(['patientList']);
        },(error)=>{
          console.error('Error fetching users', error);
          this.errorMessage = error.error.text;
          this.isFailure = true;
        })
      }
      }

    closePopup() {
      this.isFailure = false;
      this.resetForm();
    }

    resetForm() {
      this.loginForm.reset();
    }
}

