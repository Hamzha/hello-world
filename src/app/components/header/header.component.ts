import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tasks';
  showAddTask: boolean = false;
  subscription: Subscription | undefined

  constructor(private uiService:UiService) { }

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe(value =>{
      this.showAddTask = value;
    })
  }

  toggleAddTask() {
    console.log('Toggle Button')
    this.uiService.toggleAddTask();
  }

}
