import { Component, OnInit } from '@angular/core';
import {tasks} from './tasks'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = tasks;
  constructor() { }

  ngOnInit() {
  }

}
