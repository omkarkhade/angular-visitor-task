import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-grid',
  templateUrl: './visitor-grid.component.html',
  styleUrls: ['./visitor-grid.component.css']
})
export class VisitorGridComponent implements OnInit {

  constructor() { }
gridData:any=[];
  ngOnInit() {
    localStorage.getItem
  }

  getLogs(){
    if( localStorage.getItem('logs')=== null){
      this.gridData=[];
    }else{
      this.gridData= JSON.parse(localStorage.getItem('logs'))
    }
  }

}