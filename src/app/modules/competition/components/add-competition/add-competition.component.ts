import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrl: './add-competition.component.scss'
})
export class AddCompetitionComponent {

  errorMessage: string = '';
  successMessage: string = '';
  constructor(
    private dialogRef: MatDialogRef<AddCompetitionComponent>,
  ) { }

  ngOnInit(): void {
  }
  closeAddCompetitionModal(){
    this.dialogRef.close();
  }
}
