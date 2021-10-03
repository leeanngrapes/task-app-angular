import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
//property for the api URL that we're hitting
private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  //new method
  //type is a Task array
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
