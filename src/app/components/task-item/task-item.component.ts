import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // Declare the task that's being put in as an input
  @Input() task!: Task;
  // Set the icon as a prop of the task item so it can be used in html
  faTimes = faTimes;

  constructor() {
   }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log(task);
  }

}
