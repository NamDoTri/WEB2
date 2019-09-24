import { Injectable } from '@angular/core';
import {Department} from './department/department';
import {departmentArr} from './department/departmentArr';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  department: Department[] = departmentArr;
  constructor() { }

  getDepartment(){
    return <Department[]> this.department;
  }
  addDepartment(department: Department){
    let newDep = department;
    this.department.push(newDep);
  }
  removeDepartment(index){
    this.department.splice(index, 1);
  }
  updateDepartment(index, modifiedDepartment){
    this.department[index] = modifiedDepartment;
  }
}
