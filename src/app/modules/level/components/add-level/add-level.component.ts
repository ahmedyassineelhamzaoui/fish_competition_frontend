import { Component } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrl: './add-level.component.scss'
})
export class AddLevelComponent {

  errorMessage: string='';
  successMessage: string='';
  constructor(
    private levelService:LevelService,
    private dialogRef: MatDialogRef<AddLevelComponent>
    ){}

  closeLevelModal(){
    this.dialogRef.close();
  }
} 
