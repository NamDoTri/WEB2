import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  constructor(private departmentService: DepartmentService) { }
  ngOnInit() { }
  @Input() type: string;
  @Input() id: number;
  @Output() reload = new EventEmitter();

  departmentForm = new FormGroup({
    name: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
    building: new FormControl('', [ Validators.minLength(1), Validators.required]  ),
  });

  onSubmit(){
    if (this.type === 'CREATE') {
      this.departmentService.addDepartment(this.departmentForm.value)
        .subscribe(() => this.reload.emit());
    } else if (this.type === 'MODIFY') {
      this.departmentService.updateDepartment(this.id, this.departmentForm.value)
        .subscribe(() => this.reload.emit());
    } else {
      console.log('Bad input parameter');
    }
    this.departmentForm.reset();
  }
}