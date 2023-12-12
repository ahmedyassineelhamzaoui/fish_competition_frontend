import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SpinnerComponent,
    NavbarComponent
    ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    SpinnerComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
