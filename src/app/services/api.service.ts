import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
