import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsersComponent } from '../components/users/users.component';
import { TeamsComponent } from '../components/teams/teams-view/teams.component';
import { LotteryComponent } from '../components/lottery/lottery-view/lottery.component';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.scss'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule],
})
export class AdminToolsComponent {
  usersComponent = UsersComponent;
  teamsComponent = TeamsComponent;
  lotteryComponent = LotteryComponent;
  selectedComponent: any;

  constructor() {}

  onSelectComponent(component: any) {
    this.selectedComponent = component;
  }

}