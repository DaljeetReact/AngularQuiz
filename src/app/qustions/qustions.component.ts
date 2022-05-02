import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss']
})
export class QustionsComponent implements OnInit {

  constructor() { }
  userName:string = "Singh";
  points:number = 0;
  

  ngOnInit(): void {
  }

}
