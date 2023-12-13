import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';
import { AddCompetitionComponent } from './components/add-competition/add-competition.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AddCompetitionComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class CompetitionModule { }
