import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // Declare the task that's being put in as an input
  @Input() task!: Task;

  constructor() {
   }

  ngOnInit(): void {
  }

}