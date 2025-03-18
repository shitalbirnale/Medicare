import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn : boolean =false;
  constructor(private router : Router){}

  ngOnInit(){
    this.checkLoginStatus()
  }
  checkLoginStatus(){
    this.isLoggedIn = !!sessionStorage.getItem('jwtToken');
  }

  logout() {
    sessionStorage.removeItem('jwtToken'); 
    this.router.navigate(['/login']); 
  }
}
