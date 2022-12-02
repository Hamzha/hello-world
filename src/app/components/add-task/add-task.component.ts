import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()

  text!: string;
  day!: string;
  reminder: boolean = false
  showAddTask: Boolean = false
  subscription :Subscription | undefined

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value =>{
      this.showAddTask = value
    })
  }
  onSubmit() {
    if (!this.text) {
      alert('Pleas add a task!')
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask)
    this.text = ''
    this.day = ''
    this.reminder = false
  }


}
