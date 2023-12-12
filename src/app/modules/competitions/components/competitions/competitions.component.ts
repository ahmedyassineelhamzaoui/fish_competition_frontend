import { Component } from '@angular/core';
import { CompetitionsService } from '../../services/competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss'
})

export class CompetitionsComponent {
  
  competitions : any[] = [];
  errorMessage: string = '';

  constructor(private competitionService:CompetitionsService) { }

 
  ngOnInit() {
    this.getAllCompetitions();
  }
  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe(
      (response: any) => {
        this.competitions.push(...response.details.Competitions);
      },
      (error) => {
         this.errorMessage = error.message;
      }
    );
  }
}
