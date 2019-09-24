import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import Task from '../task/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() newTask = new EventEmitter<Task>();
  TaskForm = new FormGroup({
    id: new FormControl('', [ Validators.minLength(1), Validators.required]),
    name: new FormControl('', [ Validators.minLength(1), Validators.required]),
    description: new FormControl('', [ Validators.minLength(5), Validators.required])
  });

  onSubmit() {
    this.newTask.emit(this.TaskForm.value);
  }
}