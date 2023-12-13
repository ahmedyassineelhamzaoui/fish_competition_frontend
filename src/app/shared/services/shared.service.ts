import { Injectable } from '@angular/core';
import { LevelService } from '../../modules/level/services/level.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private levelService:LevelService) { }

  getAllLevels(){
    return this.levelService.getAllLevels();
  }
}
