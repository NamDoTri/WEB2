import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  faPlus = faPlus;
  faClose = faTimes;
  term: string = '';
  employee: Employee[] = [];

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.employeeService.getEmployee()
      .subscribe((res: Employee[]) => this.employee = res);
  }

  removeEmployee(toRemove) {
    this.employeeService.removeEmployee(toRemove)
      .subscribe(() => this.reload())
  }
}