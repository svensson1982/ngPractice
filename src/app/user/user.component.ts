import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GetdataService } from '../getdata.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  id: number;
  flag: boolean = false;
  activateText: string  = 'Activate';
  dogos = [];

  constructor(private route: ActivatedRoute, private usersService: UsersService, private getdata: GetdataService) { }

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

  callDogo(){
    this.getdata.loadData('https://dog.ceo/api/breeds/list/all')
      .subscribe((data) => {
        //data.map((dogo) =>{
        this.dogos = data.message; 
        console.log(data.message);
          /*if(dogo !== null){
            this.dogoResult.push(dogo);
          }*/
        //})
      })   
  }

}
