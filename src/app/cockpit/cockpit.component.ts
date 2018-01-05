import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  justAmin = false;
  disBtn: string = 'Disabled btn';
  someText = '';

  //@ViewChild('dbBtn') disabledBtn: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.disabledAgain();
  }

  onUpdate(event: Event){
    this.someText = (<HTMLInputElement>event.target).value;
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
      //serverContent: this.serverContentInput.nativeElement.value     
    });
    console.log('qwerty ' + contentInput.value);
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    nameInput.value = '';
    this.serverContentInput.nativeElement.value = '';

  }


  disabledAgain(){
    setTimeout(() => {
      this.justAmin = true;
      //this.disabledBtn.nativeElement.textContent = 'not disabled anymore';
      this.disBtn = 'not disabled anymore';
    },2000);
  }

  disabledClick(){
    this.justAmin = false;
    this.disBtn = 'upps, disabled!';
    this.disabledAgain();
  }

}
