import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() { }
  @Input() type: string;
  @Input() id: number;
  @Output() reload = new EventEmitter();
  modifying: boolean = false;
  displayed: number = -1;

  employeeForm = new FormGroup({
    first_name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    last_name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    department_id: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    age: new FormControl('', [Validators.min(18), Validators.required]  ),
    job: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
  });

  onSubmit(){
    if (this.type === 'CREATE') {
      this.employeeService.addEmployee(this.employeeForm.value)
        .subscribe(() => this.reload.emit());
    } else if (this.type === 'MODIFY') {
      this.employeeService.updateEmployee(this.id, this.employeeForm.value)
        .subscribe(() => this.reload.emit());
    } else {
      console.log('Bad input parameter');
    }
    this.employeeForm.reset();
  }
}