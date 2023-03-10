import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  allTasks: any[] = [];
  tasksInProgress: Task[] = [];
  tasksDone: Task[] = [];
  constructor() {
    this.init();
  }

  getData() {
    //@ts-ignore
    return JSON.parse(localStorage.getItem('Tasks'));
  }
  init() {
    let data = this.getData();
    if (data) {
      this.allTasks = data;
      this.tasksInProgress = this.allTasks[0];
      this.tasksDone = this.allTasks[1];
    }
  }
  saveData() {
    let data = this.getData();
    if (!data) {
      localStorage.setItem('Tasks', JSON.stringify(this.allTasks));
    }
    this.allTasks = [this.tasksInProgress, this.tasksDone];
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(this.allTasks));
  }
  addTask(name: string, date: string) {
    this.tasksInProgress.push({ name, date });
    this.saveData();
    this.init();
  }
  onEditeTask(index: number) {
    this.tasksInProgress[index].name = '';
    this.tasksInProgress[index].date = '';
    this.saveData();
  }
  toggle(item: any) {
    let index = this.tasksDone.indexOf(item);
  }
}
