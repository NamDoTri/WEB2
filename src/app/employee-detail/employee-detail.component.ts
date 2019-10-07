import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }
  employee: Employee;

  ngOnInit() {
    let employeeId = +this.route.snapshot.paramMap.get("id");
    this.employeeService.getEmployeeById(employeeId).subscribe( (res: Employee) => this.employee = res )
  }

}
