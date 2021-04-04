import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from 'src/app/models/staff';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  fieldTextType: boolean;
  email: string;
  password: string;
  loginObj = { email: '', password: '' };
  logIn: boolean;
  Role: Role;
  selectedstaff: Staff;

  constructor(
    private authGuardService: AuthGuardService,
    private staffService: StaffService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLoginStaff();
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  getLoginStaff(): void {
    const staff: any = this.authGuardService.getStaffFromStorage();
    if (staff) {
      this.selectedstaff =  staff[0];
      if (this.selectedstaff) {
        this.router.navigate(['/']);
      }
    }
  }

  login(): void {
    this.logIn = true;
    this.loginObj = { email: this.email, password: this.password };
    this.staffService.login(this.loginObj.email.trim(), this.loginObj.password).subscribe(
      (data) => {
            this.authGuardService.updateLoginStaff(data);
            window.location.href = '/';
      }, (err) => {
        console.log(err);
        if (err.message) {
          alert(err.message);
        }
      });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
