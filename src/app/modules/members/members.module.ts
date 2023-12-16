import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';
import { AssignCompetitionComponent } from './components/assign-competition/assign-competition.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   AssignCompetitionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class MembersModule { }
