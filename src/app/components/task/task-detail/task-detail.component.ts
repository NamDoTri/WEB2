import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { TaskService } from 'src/app/services/task.service'
import { Task } from 'src/app/models/task.model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  
  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private location: Location) { }
  task: Task

  ngOnInit() {
    let taskId = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(taskId)
    .subscribe( (res: Task) => this.task = res )
  }

  goBack(){
    this.location.back()
  }
}
