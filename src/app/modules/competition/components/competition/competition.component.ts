import { Component } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';


@Component({
  selector: 'app-competitions',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.scss'
})

export class CompetitionsComponent {
  
  competitions : any[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private competitionService:CompetitionService) { }

 
  ngOnInit() {
    this.isLoading = true;
    this.getAllCompetitions();
  }
  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe(
      (response: any) => {
        this.competitions.push(...response.details.Competitions);
        this.isLoading = false;
      },
      (error) => {
         this.errorMessage = error.message;
         this.isLoading = false;
      }
    );
  }
}
	
