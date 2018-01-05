import { Component, Output, EventEmitter } from '@angular/core';
import { UsersService } from './users.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user1Activated: boolean = this.usersService.user1Activated;
  user2Activated: boolean = this.usersService.user2Activated;

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if(id === 1){
          if (this.usersService.user1Activated === false){
            this.user1Activated = this.usersService.user1Activated = true;
          } else{
            this.user1Activated = this.usersService.user1Activated = false;
          }          
        }else if(id === 2){
          if (this.usersService.user2Activated === false){
            this.user2Activated = this.usersService.user2Activated = true;
          } else{
            this.user2Activated = this.usersService.user2Activated = false;
          }  
        }
      } 
    );
  }

  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName :string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
  
}
