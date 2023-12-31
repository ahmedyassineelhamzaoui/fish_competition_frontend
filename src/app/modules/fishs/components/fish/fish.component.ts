import { Component } from '@angular/core';
import { FishService } from '../../services/fish.service';
import {MatDialog} from '@angular/material/dialog';
import { AddFishComponent } from '../add-fish/add-fish.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrl: './fish.component.scss'
})
export class FishComponent {

  isLoading: boolean = false;
  fishes: any[]=[];
  errorMessage: string='';
  pageSize: number = 5;
  currentPageIndex: number = 0;

  constructor(
    private fishService:FishService,
    private dialog: MatDialog
  ) { }
  ngOnInit() {
    this.isLoading=true;
    this.getAllFishes();
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }

  getAllFishes(){
    this.fishService.getAllFishes().subscribe(
      (response:any) => {
        this.fishes.push(...response.details.fishes);
        this.isLoading=false;
      },
      (error) => {
        this.errorMessage=error.message;
        this.isLoading=false;
      }
    );
  }
  openAddFishModal(){
    this.dialog.open(AddFishComponent);
  }
}
