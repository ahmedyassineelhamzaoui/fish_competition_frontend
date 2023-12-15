import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompetitionComponent } from '../add-competition/add-competition.component';
import { CompetitionService } from '../../services/competition.service';
import { PageEvent } from '@angular/material/paginator';

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
    private addCompetitionModal: MatDialog
    ) { }

 
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
}
	
