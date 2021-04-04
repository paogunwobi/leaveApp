import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService extends BaseService {
  controllerName = 'todos';
  constructor(http: HttpClient) {
    super(http);
  }

  getTodos(): Observable<any> {
    return this.http.get(this.getFullUrl());
  }

}
