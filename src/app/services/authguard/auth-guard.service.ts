import { Staff } from 'src/app/models/Staff';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private ls = new SecureLS({ encodingType: 'aes' });
  private dsStaff = new BehaviorSubject<Staff>(this.getStaffFromStorage());
  private loginStaff = this.dsStaff.asObservable();
  constructor(
    public router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.loginStaff.subscribe((Staff) => {
      if (!Staff || (route.data.expectedRoles.includes(Staff.Role))) {
        this.router.navigate(['login']);
        return false;
      }
      // if (!(route.data.expectedRoles.includes(Staff.Role))) {
      //   this.router.navigate(['/']);
      //   return false;
      // }
    });
    return true;
  }

  getStaffFromStorage(): Staff {
    let result: Staff;
    const Staff = this.ls.get('loginStaff');
    if (Staff) {
      result = Staff;
    }
    return result;
  }

  updateLoginStaff(Staff: Staff): void {
    this.ls.set('loginStaff', Staff);
    this.dsStaff.next(Staff);
  }

  logOut(): void {
    this.ls.removeAll();
    this.dsStaff.next(null);
  }
}
