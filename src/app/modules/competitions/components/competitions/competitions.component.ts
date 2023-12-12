import { Component } from '@angular/core';
import { CompetitionsService } from '../../services/competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss'
})

export class CompetitionsComponent {

  constructor(private competitionService:CompetitionsService) { }

  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getAllCompetitions();
  }
}
