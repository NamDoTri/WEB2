import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Task } from 'src/app/models/task.model';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  constructor(private taskService: TaskService,
              private departmentService: DepartmentService,
              private location: Location,
              private route: ActivatedRoute) { }
  id: number;
  departments: Department;
  ngOnInit() {
    this.departmentService.getDepartment().subscribe( res => this.departments = res )
    this.id = +this.route.snapshot.paramMap.get("id");
    if (this.id){
      this.taskService.getTaskById(this.id)
        .subscribe( (res: Task) => {
          delete res.id;
          delete res.due_date; //TODO: add birth_date formControl
          this.taskForm.setValue(res)
        })
    }
  }

  taskForm = new FormGroup({
    department_id: new FormControl('', [ Validators.minLength(1), Validators.required]),
    name: new FormControl('', [ Validators.minLength(1), Validators.required]),
    due_date: new FormControl('', [ Validators.minLength(1), Validators.required])
  });

  onSubmit() {
    if (!this.id) {
      this.taskService.addTask(this.taskForm.value)
        .subscribe(() => this.goBack());
    } else {
      this.taskService.updateTask(this.id, this.taskForm.value)
        .subscribe(() => this.goBack());
    }
  }
  goBack(){
    this.location.back()
  }
}