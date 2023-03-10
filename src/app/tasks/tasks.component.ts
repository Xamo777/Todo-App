import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  title = 'Todo-list-App';
  sourceFilterValue!: string;
  targetFilterValue!: string;
  allTasks: any[] = [];
  tasksInProgress: Task[] = [];
  taskName!: string;
  taskDate!: Date;
  tasksDone: Task[] = [];

  constructor(private taskServ: TaskService) {}
  ngOnInit() {
    this.tasksInProgress = this.taskServ.tasksInProgress;
    this.tasksDone = this.taskServ.tasksDone;
  }

  onToggleData($event: Task) {
    this.taskServ.tasksInProgress = this.tasksInProgress;
    this.taskServ.tasksDone = this.tasksDone;
    this.taskServ.saveData();
    console.log($event);
  }

  onAddTask() {
    this.taskServ.addTask(this.taskName, this.taskDate.toString());
    this.ngOnInit();
    console.log(this.taskName, this.taskDate.toString());
  }
}
