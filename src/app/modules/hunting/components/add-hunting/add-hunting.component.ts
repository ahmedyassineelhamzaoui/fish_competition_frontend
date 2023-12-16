import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HuntingService } from '../../services/hunting.service';

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrl: './add-hunting.component.scss'
})
export class AddHuntingComponent {

  errorMessage: string="";
  successMessage: string="";
  constructor(
    private dialogRef:MatDialogRef<AddHuntingComponent>,
    private huntingService: HuntingService
    ) { }

    closeAddHuntingModal(){
      this.dialogRef.close();
    }
}
