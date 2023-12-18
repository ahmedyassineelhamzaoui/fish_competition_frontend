import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompetitionComponent } from '../add-competition/add-competition.component';
import { CompetitionService } from '../../services/competition.service';
import { PageEvent } from '@angular/material/paginator';
import { trigger, transition, style, animate } from '@angular/animations';
import { RankingComponent } from '../../../ranking/components/ranking/ranking.component';

@Component({
  selector: 'app-competitions',
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.scss'
})

export class CompetitionsComponent {
  
  competitions : any[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;
  pageSize: number = 5;
  currentPageIndex: number = 0;

  constructor(
    private competitionService: CompetitionService,
    private addCompetitionModal: MatDialog,
    private rankingModal : MatDialog
    ) { }

 
  ngOnInit() {
    this.isLoading = true;
    this.getAllCompetitions();
  }
  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe(
      (response: any) => {
        if (response.details && Array.isArray(response.details.Competitions)) {
          this.competitions.push(...response.details.Competitions);
        } else {
          console.error('response.details.Competitions is not defined or not iterable');
        }
        this.isLoading = false;
      },
      (error) => {
         this.errorMessage = error.message;
         this.isLoading = false;
      }
    );
  }
  openAddCompetitionModal(){

    const dialogRef = this.addCompetitionModal.open(AddCompetitionComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.competitions = [];
      this.getAllCompetitions();
  });

  }
  handlePageEvent(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }

  openRankModal() {
   this.rankingModal.open(RankingComponent);
  }
}
	
