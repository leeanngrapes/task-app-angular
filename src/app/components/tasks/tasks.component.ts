import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //assign as property of the component
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  //will eventually use an Observable here bc dealing with asynchronous data from server fetch
  //.subscribe is like a promise
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
