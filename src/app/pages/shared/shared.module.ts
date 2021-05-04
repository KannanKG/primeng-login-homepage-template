import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarModule } from 'ng-sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
    declarations: [
        TopbarComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SidebarModule.forRoot(),
        ButtonModule,
        RouterModule,
        DividerModule,
        MenuModule,
        TooltipModule,
        AvatarModule
    ],
    exports: [
        TopbarComponent,
        SidebarComponent,
        FooterComponent
    ]
})
export class SharedModule { }
