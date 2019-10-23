import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  faPlus = faPlus;
  faClose = faTimes;
  term: string = '';
  task: Task[] = [];

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.taskService.getTask()
      .subscribe((res: Task[]) => this.task = res);
    console.log(this.task);
  }
  
  removeTask(toRemove) {
    this.taskService.removeTask(toRemove)
      .subscribe(() => this.reload())
  }
}