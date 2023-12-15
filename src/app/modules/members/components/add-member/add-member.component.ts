import { Component } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss'
})
export class AddMemberComponent {

  member = {
    firstName: '',
    lastName: '',
    identityNumber: '',
    identityDocumentType: '',
    nationality: ''
  }

  errorMessage: string = '';
  successMessage: string = '';
  details: string='';
  constructor(
    private memberService: MemberService,
    private dialogRef: MatDialogRef<AddMemberComponent>
  ) { }

  closeMemberModal() {
    this.errorMessage = '';
    this.successMessage = '';
    this.dialogRef.close();
  }
  saveMember() {
    this.memberService.addMember(this.member).subscribe(
      (data: any) => {
        this.successMessage = data.message;
        this.errorMessage = '';
        this.member = {
          firstName: '',
          lastName: '',
          identityNumber: '',
          identityDocumentType: '',
          nationality: ''
        };
      },
      (err: any) => {
        if (err.error.details) {
          let detailsStr = '';
          for (let key in err.error.details) {
            if (err.error.details.hasOwnProperty(key)) {
              detailsStr += err.error.details[key] + "\n";
            }
          }
          this.details = detailsStr;
        }
        this.errorMessage = err.error.message + "\n  " + this.details;
        this.successMessage = '';
        this.member = {
          firstName: '',
          lastName: '',
          identityNumber: '',
          identityDocumentType: '',
          nationality: ''
        };
      });
  }

}
