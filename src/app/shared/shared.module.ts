import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
