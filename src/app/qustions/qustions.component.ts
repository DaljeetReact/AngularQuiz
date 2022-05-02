import { Component, OnInit } from '@angular/core';
import {FetchdataService} from '../services/fetchdata.service';
import {Question} from '../models/questions.model';

@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss']
})
export class QustionsComponent implements OnInit {
  userName:string = "Singh";
  points:number = 0;
  currenIndex:number = 0;
  AllQuestion:Question[] = [];

  constructor( private fetchdata:FetchdataService) { }
 
  ngOnInit(): void {
    this.LoadData();
  }

  next(){
    this.currenIndex++;
  }

  Previous(){

  }
  
  reset(){
  }

  LoadData(){
    this.fetchdata.FetchAllQuestions().subscribe(
      res=>{
        this.AllQuestion = res.questions;
        console.log(res.questions);
      }
    )
  }
}
