import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.deveopment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private httpClient:HttpClient) { }

  getAllFishes(): Observable<any>{
    return this.httpClient.get(environment.apiURL+'fish');
  }
}
