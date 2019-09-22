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
  displayed: number = -1;
  modified: boolean = false;

  ngOnInit() {  }

  updateDisplayed(idx) {
    if (idx !== this.displayed) {
      this.modified = false;
      this.displayed = idx;
    } else {
      this.displayed = -1;
      this.modified = false;
    }
  }

  newTask(taske) {
    const taskToPush: Task = { id: taske.id, name: taske.name, description: taske.description}
    this.task.push(taskToPush);
  }

  updateTask(taske) {
    this.task[this.displayed] = taske;
    this.modified = false;
  }

  deleteTask(taske) {
    this.task.splice(taske, 1);
    this.displayed = -1;
  }
}
