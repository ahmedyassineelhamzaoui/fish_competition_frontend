import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  selectedCompetition: string ='';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AssignCompetitionComponent>,
    private competitionService: CompetitionService,
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
      console.log(this.data.id);
      console.log(this.selectedCompetition);
    }
  }
  onCompetitionChange(e:any) {
    this.selectedCompetition = e.target.value;
  }
}
