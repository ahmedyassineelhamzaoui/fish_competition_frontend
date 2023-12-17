import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AddMemberComponent} from '../add-member/add-member.component';
import { MemberService } from '../../services/member.service';
import { PageEvent } from '@angular/material/paginator';
import { CompetitionService } from '../../../competition/services/competition.service';
import { AssignCompetitionComponent } from '../assign-competition/assign-competition.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

  isLoading:boolean = false;
  errorMessage:string = '';
  members:any[] = [];
  pageSize:number = 5;
  currentPageIndex:number = 0;
  lengthOfCompetitions: number =0;

  constructor(
    private dialog:MatDialog,
    private memberService:MemberService,
    private competitionService: CompetitionService
    ) { }

  
  ngOnInit() {
    this.isLoading = true;
    this.getAllMembers();
    this.getAllCompetitions();
  }
  getAllMembers() {
    this.memberService.getMembers().subscribe(
      (response:any) => {
        this.isLoading = false;
        this.members.push(...response.details.members);
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
      }
    );
  }
  openAddMemberModal() {
    const dialogRef = this.dialog.open(AddMemberComponent);
    dialogRef.afterClosed().subscribe(()=>{
       this.members = [];
       this.getAllMembers();
    });
  }
  handlePageEvent(pageEvent: PageEvent) {
    this.currentPageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
  }
  getAllCompetitions(){
    this.competitionService.getAllCompetitions().subscribe(
      (response: any) => {
        this.lengthOfCompetitions= response.details.Competitions.length;
      },
      (error) => {
         console.log(error)
      }
    );
  }
  openAssignComeptitionModal(id: string){
     this.dialog.open(AssignCompetitionComponent,
      {
        data: {
          id: id
        }
      });

  }
}
