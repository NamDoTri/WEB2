import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../networkConfiguration';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient: HttpClient) { }
  task: Task[] = [];

  onInit() {
    this.getTask();
  }

  getTaskById(id): any {
    return this.httpClient.get(`${baseURL}task?id=${id}`);
  }

  getTask(): any {
    return this.httpClient.get(`${baseURL}task`);
  }

  addTask(task: Task) {
    return this.httpClient.post(`${baseURL}task`, { 
      department_id: task.department_id,
      name: task.name,
      due_date: task.due_date
    });
  }

  removeTask(index: number) {
    return this.httpClient.delete(`${baseURL}task?id=${index}`);
  }

  updateTask(index: number, task: Task) {
    return this.httpClient.put(`${baseURL}task?id=${index}`, { 
      department_id: task.department_id,
      name: task.name,
      due_date: task.due_date,
    });
  }
}
