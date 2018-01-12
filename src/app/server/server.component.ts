import { Component } from '@angular/core';

@Component({
  selector: 'app-server-component',
  // Component As : CSS selector : Syntax //selector: 'app-server-component'//
  // Component As : Attribute selector : Syntax //selector: '[app-server-component]'//
  // Component As : css class selector : Syntax //selector: '.app-server-component'//
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId:number= 10;
  serverStatus:string= 'Offline For timebing';
  allowServerButton=true;
  serverNameEnterted='Test Server';
  username='';

  constructor(){
    setTimeout(()=> {
      this.allowServerButton=false;
    }, 2000);
  }

  getStatusOfServer(){
    return this.serverStatus;
  }

  onSeverCreate(){
    this.serverStatus='Server has been created succesfully!!! with the name'+ this.serverNameEnterted;
  }


  onUpdateSeverName(event:Event){
    this.serverNameEnterted=(<HTMLInputElement>event.target).value;
  }


  onResetIt(){
    this.username='';
  }
}
