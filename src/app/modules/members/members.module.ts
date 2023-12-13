import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './components/member/member.component';
import { AddMemberComponent } from './components/add-member/add-member.component';



@NgModule({
  declarations: [
    MemberComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }
