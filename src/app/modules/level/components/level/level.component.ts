import { Component } from '@angular/core';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {

  errorMessage: string='';
  isLoading: boolean = false;
  levels: any[]=[];

  constructor(private levelService:LevelService) { }

  ngOnInit() {
    this.isLoading=true;
    this.getAllLevels();
  }
  getAllLevels(){
    this.levelService.getAllLevels().subscribe(
      (response:any) => {
        this.levels.push(...response.details.levels);
        this.isLoading=false;
      },
      (error) => {
        this.errorMessage=error.message;
        this.isLoading=false;
      }
    );
  }
}
