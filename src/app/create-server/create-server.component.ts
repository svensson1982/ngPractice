import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  servers = [
    {
      name: 'testServer',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'testServer',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'testServer',
      capacity: 10,
      id: this.generateId()
    }
  ];


  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  onAddServer(name: string){
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServer(){
    this.serverService.storeServer(this.servers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  generateId(){
    return Math.random() * (100 - 1) + 1;
  }

}
