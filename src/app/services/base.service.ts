import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  baseUrl = 'https://leave-app-be.herokuapp.com/';

  controllerName = '';

  constructor(protected http: HttpClient) { }

  getFullUrl(): string {
    return this.baseUrl + `${this.controllerName}/`;
  }
}
