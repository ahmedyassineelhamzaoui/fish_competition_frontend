import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';
import { AddCompetitionComponent } from './components/add-competition/add-competition.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppModule,
    FormsModule
  ]
})
export class CompetitionModule { }
