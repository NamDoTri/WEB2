import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) { }
  department: Department[] = [];
  modifying: boolean = false;
  displayed: number = -1;

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.modifying = false;
    this.displayed = -1;
    this.departmentService.getDepartment()
      .subscribe((res: Department[]) => this.department = res);
  }

  getDepartmentInfo(id){
    this.departmentService.getDepartmentInfo(id).subscribe( (res: Department) => console.log(res) )
  }  
  removeDepartment(toRemove) {
    this.displayed = -1;
    this.departmentService.removeDepartment(toRemove)
      .subscribe(() => this.reload())
  }
}
