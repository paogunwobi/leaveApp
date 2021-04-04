import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StaffService extends BaseService {
  controllerName = 'Staff';
  constructor(http: HttpClient) {
    super(http);
  }

  changePassword(StaffData): Observable<any> {
    return this.http.put<Array<any>>(this.getFullUrl() + `changePassword`, StaffData);
  }

  login(email, password): Observable<any> {
    return this.http.get<Array<any>>(this.getFullUrl() + `login/${email}/${password}`);
  }

  signUp(StaffData): Observable<any> {
    return this.http.post<Array<any>>(this.getFullUrl() + `signUp`, StaffData);
  }

  update(StaffData): Observable<any> {
    return this.http.put<Array<any>>(this.getFullUrl() + `update`, StaffData);
  }

  getStaffByEmail(email): Observable<any> {
    return this.http.get<Array<any>>(this.getFullUrl() + `get?condition={"email":"${email}"}`);
  }

  getStaffs(): Observable<any> {
    return this.http.get<Array<any>>(this.getFullUrl() + `get`);
  }

  getStaffsPaged(status, skip, limit): Observable<any> {
    return this.http.get<Array<any>>(this.getFullUrl() + `get`
    + `?condition={"status":"${status}"}&sort={"name":1}&skip=${skip}&limit=${limit}`);
  }

  searchStaffs(search): Observable<any> {
    return this.http.get(this.getFullUrl() + `get` + `?search=${search}`);
  }

  deleteStaffs(Staff): Observable<any> {
    return this.http.delete(this.getFullUrl() + `delete` + `/${Staff}`);
  }
}
