import { Component } from '@angular/core';
import { HuntingService } from '../../services/hunting.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHuntingComponent } from '../add-hunting/add-hunting.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrl: './hunting.component.scss'
})
export class HuntingComponent {

  errorMessage: string='';
  successMessage: string='';
  huntings: any[] = [];
  isLoading: boolean = false;
  currentPageIndex: number = 0;
  pageSize: number = 5;

  constructor(
    private huntingService: HuntingService,
    private dialog : MatDialog
  ) { }
  ngOnInit(): void {
    this.isLoading= true;
  }


  openAddHuntingModal() {
    this.dialog.open(AddHuntingComponent);
  }
  handlePageEvent(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

}
