import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  employee: Employee[] = [];
  modifying: boolean = false;
  displayed: number = -1;

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.modifying = false;
    this.displayed = -1;
    this.employeeService.getEmployee()
      .subscribe((res: Employee[]) => this.employee = res);
  }

  removeEmployee(toRemove) {
    this.displayed = -1;
    this.employeeService.removeEmployee(toRemove)
      .subscribe(() => this.reload())
  }
}