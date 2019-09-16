import { Component, OnInit } from '@angular/core';
import Task from './task';
import { taskArr } from './taskArr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task[] = taskArr;

  constructor() { }

  ngOnInit() {
  }

}
