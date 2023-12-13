import { Component } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss'
})
export class AddMemberComponent {

  errorMessage: string = '';
  successMessage: string = '';
  constructor(
    private memberService:MemberService,
    private dialogRef: MatDialogRef<AddMemberComponent> 
    ) { }

  closeMemberModal(){
    this.errorMessage = '';
    this.successMessage = '';
    this.dialogRef.close();
  }

}
