import { Component, Inject } from '@angular/core';
import { LayoutService } from '../sidebar.services';
import { DOCUMENT } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  checked: boolean = false;
  items: MenuItem[] = [{
    items: [{
      label: 'Light mode',
      icon: 'pi pi-circle-on',
      command: (event) => {
        this.loadStyle('')
      }
    },
    {
      label: 'Dark mode',
      icon: 'pi pi-circle-off',
      command: (event) => {
        this.loadStyle('dark.css')
      }
    }]
  },
  {
    items: [{
      label: 'Logout',
      icon: 'pi pi-sign-out'
    }]
  }
  ];

  constructor(private layout: LayoutService, @Inject(DOCUMENT) private document: Document) { }
  _toggleSidebar(): void {
    this.layout.sidebar_opened = !this.layout.sidebar_opened;
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    if (styleName !== '') {
      let themeLink = this.document.getElementById(
        'dark-theme'
      ) as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = styleName;
      } else {
        const style = this.document.createElement('link');
        style.id = 'dark-theme';
        style.rel = 'stylesheet';
        style.href = `${styleName}`;

        head.appendChild(style);
      }
    } else {
      let themeLink = this.document.getElementById(
        'dark-theme'
      ) as HTMLLinkElement;
      if (themeLink) {
        themeLink.remove();
      }
    }
  }

}
