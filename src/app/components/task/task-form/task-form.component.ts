import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Task } from 'src/app/models/task.model';
import { Department } from 'src/app/models/department.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  constructor(private taskService: TaskService,
              private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private location: Location,
              private route: ActivatedRoute) { }
  id: number;
  departments: Department;
  employees: Employee;

  today : Date = new Date();

  ngOnInit() {
    this.departmentService.getDepartment().subscribe( res => this.departments = res )
    this.employeeService.getEmployee().subscribe( res => this.employees = res )
    this.id = +this.route.snapshot.paramMap.get("id");
    if (this.id){
      this.taskService.getTaskById(this.id)
        .subscribe( (res: Task) => {
          delete res.id;
          this.taskForm.setValue(res)
        })
    }
  }

  taskForm = new FormGroup({
    department_id: new FormControl('', [ Validators.minLength(1), Validators.required]),
    name: new FormControl('', [ Validators.minLength(1), Validators.required]),
    due_date: new FormControl('', [ Validators.minLength(1), Validators.required]),
    employees: new FormControl(null, [ Validators.minLength(1), Validators.required])
  });

  compareDates() {
    console.log('cc');
    if (this.taskForm.value.due_date < this.today) {
      console.log('oui');
      
    }
  }

  onSubmit() {
    console.log(this.taskForm.value.employees)
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