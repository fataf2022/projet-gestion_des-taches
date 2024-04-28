import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  taskName = '';
  taskContent = '';

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    this.taskService.addTask(this.taskName, this.taskContent);
    this.taskName = '';
    this.taskContent = '';
  }

  closeTask(id: number) {
    this.taskService.closeTask(id);
  }
}
