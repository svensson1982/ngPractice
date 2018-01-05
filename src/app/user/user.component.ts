import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  id: number;
  flag: boolean = false;
  activateText: string  = 'Activate';

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
        } 
      )

      this.usersService.userActivated
        .subscribe(
          (id:number) => {
            console.log(id);
          }
        )
  }

  onActivate(){
    console.log('1' + this.usersService.user1Activated);
    if (this.usersService.user1Activated === false){
      this.usersService.userActivated.next(this.id);
      this.activateText = 'Deactivate'
      console.log('2' + this.usersService.user1Activated);
    } else{
      this.usersService.userActivated.next(this.id);
      this.activateText = 'Activate!'
      console.log('3' + this.usersService.user1Activated);
    }
    

  }

}
