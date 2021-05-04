import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../sidebar.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public layout: LayoutService) { }
}
