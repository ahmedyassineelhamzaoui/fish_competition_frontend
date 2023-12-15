import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CompetitionService } from '../../../competition/services/competition.service';

@Component({
  selector: 'app-assign-competition',
  templateUrl: './assign-competition.component.html',
  styleUrl: './assign-competition.component.scss'
})
export class AssignCompetitionComponent {


  errorMessage: string='';
  successMessage: string='';
  competitions: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<AssignCompetitionComponent>,
    private competitionService: CompetitionService
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
}
