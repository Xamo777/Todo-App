import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  allTasks: any[] = [];
  tasksInProgress: Task[] = [];

  tasksDone: Task[] = [];
  taskName!: string;
  taskDate!: Date;
  constructor(private taskServ: TaskService) {}
  ngOnInit() {
    // this.allTasks = this.taskServ.getData();
    // if (this.allTasks) {
    //   this.tasksInProgress = this.allTasks[0];
    //   this.tasksDone = this.allTasks[1];
    // }
  }
  onAddTask() {
    let date = `${
      this.taskDate.getDate().toString().length == 1 ? '0' : ''
    }${this.taskDate.getDate()}/${
      (this.taskDate.getMonth() + 1).toString().length == 1 ? '0' : ''
    }${this.taskDate.getMonth() + 1}/${this.taskDate.getFullYear()}`;
    this.taskServ.addTask(this.taskName, date);
  }
}
