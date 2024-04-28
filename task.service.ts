import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>([]);

  constructor() {}

  getTasks() {
    return this.taskSubject.asObservable();
  }

  addTask(name: string, content: string) {
    const id = this.tasks.length + 1;
    const newTask: Task = {
      id,
      name,
      content,
      status: 'active',
    };
    this.tasks.push(newTask);
    this.taskSubject.next(this.tasks);
  }

  closeTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = 'closed';
      this.taskSubject.next(this.tasks);
    }
  }
}
