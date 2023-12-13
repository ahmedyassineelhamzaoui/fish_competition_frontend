import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AppModule } from '../../app.module';



@NgModule({
  declarations: [
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class MembersModule { }
