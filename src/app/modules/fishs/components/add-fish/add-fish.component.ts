import { Component } from '@angular/core';
import { FishService } from '../../services/fish.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrl: './add-fish.component.scss'
})
export class AddFishComponent {

  errorMessage: string='';
  successMessage: string='';

  constructor(
    private fishService:FishService,
    private dialogRef: MatDialogRef<AddFishComponent>
  ) { }
  
  closeLevelModal(){
    this.dialogRef.close();
  }
}
