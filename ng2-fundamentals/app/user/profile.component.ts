import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: './app/user/profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {

  }
  profileForm: FormGroup;
  ngOnInit() {
    let userName  = new FormControl(this.authService.currentUser.userName);
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    let password = new FormControl(this.authService.currentUser.password);
    
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
      password: password, 
      userName: userName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName, formValues.password);
    this.router.navigate(['events']);
  }
}