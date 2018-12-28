import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
        nom: '',
        email: '',
        password: ''
  };

  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post(environment.apiBaseUri + '/register', user);
  }

  getAlluser() {
    return this.http.get(environment.apiBaseUri + '/getAlluser');
  }

}
