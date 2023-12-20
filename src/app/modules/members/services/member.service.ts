import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient:HttpClient) { }

  getMembers() {
    return this.httpClient.get(environment.apiURL+'members');
  }
  addMember(member:any){
    return this.httpClient.post(environment.apiURL+'member',member);
  }
  searchMember(searchText:string){
    return this.httpClient.get(environment.apiURL+'member/'+searchText);
  }
}
