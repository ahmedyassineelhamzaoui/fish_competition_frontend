import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-competition',
  templateUrl: './assign-competition.component.html',
  styleUrl: './assign-competition.component.scss'
})
export class AssignCompetitionComponent {


  errorMessage: string='';
  successMessage: string='';

  constructor(
    private dialogRef: MatDialogRef<AssignCompetitionComponent>,
  ) { }

  closeAssignCompetitionModal() {
    this.dialogRef.close();
  }
}
