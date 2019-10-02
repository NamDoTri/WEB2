import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/app/networkConfiguration';
import { Department } from 'src/app/models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) { }
  department: Department[] = [];

  onInit() {
    this.getDepartment();
  }

  getDepartment(): any {
    return this.httpClient.get(`${baseURL}department`);
  }

  getDepartmentInfo(id){
    return this.httpClient.get(`${baseURL}department?id=${id}`)
  }

  addDepartment(department: Department): any {
    return this.httpClient.post(`${baseURL}department`, { 
      name: department.name, 
      building: department.building
    });
  }

  removeDepartment(index: number): any {
    return this.httpClient.delete(`${baseURL}department?id=${index}`);
  }

  updateDepartment(index: number, department: Department): any {
    return this.httpClient.put(`${baseURL}department?id=${index}`, { 
      name: department.name,
      building: department.building
    });
  }
}
