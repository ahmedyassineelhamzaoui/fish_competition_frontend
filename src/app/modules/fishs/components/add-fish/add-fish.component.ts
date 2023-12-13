import { Component } from '@angular/core';
import { FishService } from '../../services/fish.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LevelService } from '../../../level/services/level.service';
@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrl: './add-fish.component.scss'
})
export class AddFishComponent {

  errorMessage: string='';
  successMessage: string='';
  levels: any[] = [];

  constructor(
    private fishService:FishService,
    private levelService:LevelService,
    private dialogRef: MatDialogRef<AddFishComponent>
  ) { }
  
  
  ngOnInit(){
    this.getAllLevels();
  }
  getAllLevels(){
    this.levelService.getAllLevels().subscribe(
      (response:any) => {
        this.levels.push(...response.details.levels);
      },
      (error) => {
        this.errorMessage=error.message;
      }
    );
  }
  closeLevelModal(){
    this.dialogRef.close();
    this.errorMessage = '';
    this.successMessage = '';
  }

}
