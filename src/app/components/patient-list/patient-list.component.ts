import { Component } from '@angular/core';
import { PatientServiceService } from 'src/app/services/patient-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {

  patients : any = [];
  constructor(private _patientService : PatientServiceService){}

  ngOnInit(){
    this.getPatientDetails();
  }

  getPatientDetails(){
    var response = this._patientService.getPatientDetails().subscribe((data) => {
      this.patients = data;
    },(error) => {
      console.log("Failed to fetch patient details !!!");
    });
  }

  editPatient(patientId: number) {
    alert(`Edit Patient with ID: ${patientId}`);
  }

  // Delete patient
  deletePatient(patientId: number) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.patients = this.patients.filter((patient: { patientId: number; }) => patient.patientId !== patientId);
    }
  }
}
