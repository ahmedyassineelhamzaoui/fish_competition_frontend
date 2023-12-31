import { Component, Inject } from '@angular/core';
import { RankingService } from '../../services/ranking.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompetitionsComponent } from '../../../competition/components/competition/competition.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {

  rankings : any[] = [];
  currentPageIndex: number = 0;
  pageSize:number = 5;
  isLoading: boolean = false;

  constructor(
    private rankingService:RankingService,
    private dialogRef: MatDialogRef<CompetitionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    handlePageEvent(evenet:PageEvent){
      this.currentPageIndex = evenet.pageIndex;
      this.pageSize = evenet.pageSize;
    }

    ngOnInit() {
      this.isLoading = true;
      this.getRankingsByCompetitionId();
    }
    getRankingsByCompetitionId(){
      
      this.rankingService.getRankingsByCompetitionId(this.data.id).subscribe(
        (response: any) => {
          if (response.details && Array.isArray(response.details.rankings)) {
            this.rankings.push(...response.details.rankings);
            this.isLoading = false;
          } else {
            this.isLoading = false;
            console.error('response.details.Rankings is not defined or not iterable');
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
    closeRankingModal(){
      this.dialogRef.close();
    }
    
}
