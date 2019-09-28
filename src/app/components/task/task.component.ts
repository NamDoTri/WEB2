import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  task: Task[] = [];
  modifying: boolean = false;
  displayed: number = -1;

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.modifying = false;
    this.displayed = -1;
    this.taskService.getTask()
      .subscribe((res: Task[]) => this.task = res);
  }
  
  removeTask(toRemove) {
    this.displayed = -1;
    this.taskService.removeTask(toRemove)
      .subscribe(() => this.reload())
  }
}