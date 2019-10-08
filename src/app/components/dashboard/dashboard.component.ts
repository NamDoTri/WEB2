import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { Task } from 'src/app/models/task.model';

import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private taskService: TaskService) { }

  departments: Department[];
  employees: Employee[];
  tasks: Task[]

  ngOnInit() {
    this.departmentService.getDepartment().subscribe((res: Department[]) => this.departments = res);
    this.employeeService.getEmployee().subscribe((res: Employee[]) => this.employees = res);
    this.taskService.getTask().subscribe((res: Task[]) => this.tasks = res);
  }

}
