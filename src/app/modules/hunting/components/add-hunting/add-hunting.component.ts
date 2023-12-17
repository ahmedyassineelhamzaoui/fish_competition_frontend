import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HuntingService } from '../../services/hunting.service';
import { CompetitionService } from '../../../competition/services/competition.service';
import { MemberService } from '../../../members/services/member.service';
import { FishService } from '../../../fishs/services/fish.service';

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrl: './add-hunting.component.scss'
})
export class AddHuntingComponent {

  hunting ={
    fish: {id: ''},
    member :{ id : ''},
    competition : {id : ''},
    weight : 0
  }
  errorMessage: string="";
  successMessage: string="";
  competitions: any[] = [];
  members: any[] = [];
  fishs: any[] = [];
  constructor(
    private dialogRef:MatDialogRef<AddHuntingComponent>,
    private huntingService: HuntingService,
    private fishService: FishService,
    private memberService: MemberService,
    private competitionService: CompetitionService
    ) { }

    ngOnInit(): void {
      this.getAllCompetitions();
      this.getAllMembers();
      this.getAllFishs();
    }
    selectedCompetition(e:any){
        this.hunting.competition.id = e.target.value;
    }
    selectedMember(e:any){
        this.hunting.member.id = e.target.value;
    }
    selectedFish(e:any){
        this.hunting.fish.id = e.target.value;
    }
    saveHunting(){
      console.log(this.hunting.weight)
      console.log(this.hunting.fish.id)
      console.log(this.hunting.member.id)
      console.log(this.hunting.competition.id)
      if(!this.hunting.fish.id){
        
        alert("fish is required");
        return;
      }else if(!this.hunting.member.id){
        alert("member is required");
        return;
      }else if (!this.hunting.competition.id){
        alert("competition is required");
        return;
      }else{
        this.huntingService.addHunting(this.hunting).subscribe(
          (res:any) => {
            this.successMessage = res.message;
            this.errorMessage = "";
          },
          (err) => {
            this.errorMessage = err.error.message;
            this.successMessage = "";
          }
        )
      }
     
    }
    closeAddHuntingModal(){
      this.dialogRef.close();
    }
    getAllCompetitions(){
      this.competitionService.getAllCompetitions().subscribe(
        (res:any) => {
          this.competitions.push(...res.details.Competitions);
        },
        (err) => {
          console.log(err);
        }
      )
    }
    getAllMembers(){
      this.memberService.getMembers().subscribe((res:any)=>{
         this.members.push(...res.details.members);
      },(error)=>{
        console.log(error);
      })
    }
    getAllFishs(){
      this.fishService.getAllFishes().subscribe((res:any)=>{
        this.fishs.push(...res.details.fishes);
      },(error)=>{
        console.log(error);
      });
    }

}
