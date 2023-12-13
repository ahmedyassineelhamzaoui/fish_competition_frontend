import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private httpClient:HttpClient) { }

  getAllLevels(){
    return this.httpClient.get(environment.apiURL+'levels');
  }
}
