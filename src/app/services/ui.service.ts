import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //define 
  private showAddTask: boolean = false;
  //define subject
  private Subject = new Subject<any>();

  constructor() { }

  //Service: call first one when the button is clicked
  // second one is called wherever we want to change something

  //function to toggle the value
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    //pass in the new value
    this.Subject.next(this.showAddTask);
  }


  //fire off when we toggle
  onToggle(): Observable<any> {
    return this.Subject.asObservable();
  }

}
