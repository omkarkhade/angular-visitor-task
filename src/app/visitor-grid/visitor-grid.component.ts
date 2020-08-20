import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-grid',
  templateUrl: './visitor-grid.component.html',
  styleUrls: ['./visitor-grid.component.css']
})
export class VisitorGridComponent implements OnInit {

  constructor() { }
  visitorData =[]
gridData:any;

  ngOnInit() {
    this.getLogs()
  }

  getLogs(){
    
      this.gridData= JSON.parse(localStorage.getItem('logs'));
     //this.visitorData.push(this.gridData);
    
  }

}