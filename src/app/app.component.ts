import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.matchMedia('(prefers-color-scheme: light)').matches;
    const head = this.document.getElementsByTagName('head')[0];
    if (!theme) {
      let themeLink = this.document.getElementById(
        'dark-theme'
      ) as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = 'dark.css';
      } else {
        const style = this.document.createElement('link');
        style.id = 'dark-theme';
        style.rel = 'stylesheet';
        style.href = `${'dark.css'}`;

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
