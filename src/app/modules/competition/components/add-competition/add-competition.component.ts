import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrl: './add-competition.component.scss'
})
export class AddCompetitionComponent {

  errorMessage: string = '';
  successMessage: string = '';
  details : string='';
  competition = {
    code: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    amount: 0
  };

  constructor(
    private dialogRef: MatDialogRef<AddCompetitionComponent>,
    private serviceCompetition: CompetitionService
  ) { }

  ngOnInit(): void {
  }
  closeAddCompetitionModal() {
    this.dialogRef.close();
  }
  saveCompetition() {

    this.competition.date = new Date(this.competition.date).toISOString().split('T')[0];
    this.competition.startTime += ':00';
    this.competition.endTime += ':00';

    this.serviceCompetition.addCompetition(this.competition).subscribe(
      (data: any) => {
        this.successMessage = data.message;
        this.errorMessage = '';
      },
      (err: any) => {
        if(err.error.details){
            let detailsStr = '';
            for (let key in err.error.details) {
              if (err.error.details.hasOwnProperty(key)) {
                detailsStr += err.error.details[key] + "\n";
              }
            }
             this.details =    detailsStr;
        }
        this.errorMessage = err.error.message + "\n  "+this.details;
        this.successMessage = '';
        this.competition = {
          code: '',
          date: '',
          startTime: '',
          endTime: '',
          location: '',
          amount: 0
        };
      },

    );
  }
}
