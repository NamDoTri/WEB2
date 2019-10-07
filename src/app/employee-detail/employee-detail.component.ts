import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input()
  queryParams: {
    id: number
  }
  
  constructor(private employeeService: EmployeeService) { }
  employee: Employee;

  ngOnInit() {
    this.employeeService.getEmployeeById(this.queryParams.id)
    .subscribe( (res: Employee) => {
      console.log(res);
      this.employee = res;
    })
  }

}
