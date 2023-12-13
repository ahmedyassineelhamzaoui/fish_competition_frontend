import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AddMemberComponent} from '../add-member/add-member.component';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

  isLoading:boolean = false;
  errorMessage:string = '';
  members:any[] = [];

  constructor(
    private dialog:MatDialog,
    private memberService:MemberService
    ) { }

  openAddMemberModal() {
    this.dialog.open(AddMemberComponent);
  }
  ngOnInit() {
    this.getAllMembers();
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
}
