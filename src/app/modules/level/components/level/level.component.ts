import { Component } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { MatDialog } from '@angular/material/dialog';
import { AddLevelComponent } from '../add-level/add-level.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {

  errorMessage: string='';
  isLoading: boolean = false;
  levels: any[]=[];
  currentPageIndex: number = 0;
  pageSize: number = 5;

  constructor(
    private levelService:LevelService,
    private dialog: MatDialog
    ) { }

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
  openAddLevelModal(){
    this.dialog.open(AddLevelComponent);
  }
  handlePageEvent(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }
}