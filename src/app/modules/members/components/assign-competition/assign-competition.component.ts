import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompetitionService } from '../../../competition/services/competition.service';
import { RankingService } from '../../../ranking/services/ranking.service';
@Component({
  selector: 'app-assign-competition',
  templateUrl: './assign-competition.component.html',
  styleUrl: './assign-competition.component.scss'
})
export class AssignCompetitionComponent {


  errorMessage: string='';
  successMessage: string='';
  competitions: any[] = [];
  selectedCompetition: string ='';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AssignCompetitionComponent>,
    private competitionService: CompetitionService,
    private rankingService: RankingService
  ) { }

  ngOnInit() {
    this.getAllCompetitions();
  }
  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe(
      (response:any)=>{
         this.competitions.push(...response.details.Competitions);
    },(error)=>{
       console.log(error);
    })
  }
  closeAssignCompetitionModal() {
    this.dialogRef.close();

  }
  assignCompetition(){
    if (!this.selectedCompetition) {
      alert('Please select a competition');
      return;
    }else{
      const ranking = {
        member: {
          id: this.data.id
        },
        competition: {
          id: this.selectedCompetition
        }
      };
      console.log(ranking);
      this.rankingService.addRanking(ranking).subscribe((response:any) => {
        
       this.successMessage = response.message;
       this.errorMessage = '';
      }, error => {
        this.errorMessage = error.error.message;
        this.successMessage = '';
      });
    }
  }
  onCompetitionChange(e:any) {
    this.selectedCompetition = e.target.value;
  }
}
