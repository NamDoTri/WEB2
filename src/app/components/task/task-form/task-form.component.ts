import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  constructor(private taskService: TaskService) { }
  ngOnInit() { }
  @Input() type: string;
  @Input() id: number;
  @Output() reload = new EventEmitter();

  taskForm = new FormGroup({
    department_id: new FormControl('', [ Validators.minLength(1), Validators.required]),
    name: new FormControl('', [ Validators.minLength(1), Validators.required]),
    due_date: new FormControl('', [ Validators.minLength(1), Validators.required])
  });

  onSubmit() {
    if (this.type === 'CREATE') {
      this.taskService.addTask(this.taskForm.value)
        .subscribe(() => this.reload.emit());
    } else if (this.type === 'MODIFY') {
      this.taskService.updateTask(this.id, this.taskForm.value)
        .subscribe(() => this.reload.emit());
    } else {
      console.log('Bad input parameter');
    }
    this.taskForm.reset();
  }
}