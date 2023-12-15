import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AppModule } from '../../app.module';
import { AssignCompetitionComponent } from './components/assign-competition/assign-competition.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class MembersModule { }
