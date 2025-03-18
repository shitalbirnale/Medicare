import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { NavbarComponent } from './common/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    LogInComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
