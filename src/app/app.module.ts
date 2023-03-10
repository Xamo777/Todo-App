import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickListModule } from 'primeng/picklist';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [AppComponent, AddTaskComponent, TasksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PickListModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
