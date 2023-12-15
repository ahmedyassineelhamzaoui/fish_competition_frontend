import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  numberOfLevels: number = 0;

  constructor(private sharedService:SharedService) { }
  ngOnInit(){
    this.getAllLevels();
  }
  getAllLevels(){
    this.sharedService.getAllLevels().subscribe(
      (response:any) => {
       this.numberOfLevels = response.details.levels.length;
      },
      (error) => {
        
      }
    );
  }
}
