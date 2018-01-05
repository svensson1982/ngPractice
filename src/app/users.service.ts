import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  
  constructor() { }

  userActivated = new Subject();
  user1Activated = false;
  user2Activated = false;


}
