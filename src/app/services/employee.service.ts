import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../networkConfiguration';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  employee: Employee[] = [];

  onInit() {
    this.getEmployee();
  }

  getEmployee(): any {
    return this.httpClient.get(`${baseURL}employee`);
  }

  addEmployee(employee: Employee) {
    return this.httpClient.post(`${baseURL}employee`, { 
      first_name: employee.first_name,
      last_name: employee.last_name,
      birth_date: employee.birth_date,
      department_id: employee.department_id,
     });
  }

  removeEmployee(index: number) {
    return this.httpClient.delete(`${baseURL}employee?id=${index}`);
  }

  updateEmployee(index: number, employee: Employee) {
    return this.httpClient.put(`${baseURL}employee?id=${index}`, {
       first_name: employee.first_name,
       last_name: employee.last_name,
       birth_date: employee.birth_date,
       department_id: employee.department_id
      });
  }
  getEmployeeById(id: number){
    return this.httpClient.get(`${baseURL}employee?id=${id}`)
  }
}
