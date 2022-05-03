import { Component, OnInit,SimpleChanges ,OnChanges} from '@angular/core';
import { timer } from 'rxjs';

import {FetchdataService} from '../services/fetchdata.service';
import {Question,Option} from '../models/questions.model';

@Component({
  selector: 'app-qustions',
  templateUrl: './qustions.component.html',
  styleUrls: ['./qustions.component.scss']
})
export class QustionsComponent implements OnInit,OnChanges{
  userName:string = "Singh";
  points:number = 0;
  currenIndex:number = 0;
  AllQuestion:Question[] = [];
  percentage:string = "0";
  ChangeBg:string = "white";
  subscribeTimer: any;
  interval:any;
  timeLeft:number = 10;

  constructor( private fetchdata:FetchdataService) { }
 
  ngOnInit(): void {
    this.LoadData();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  next(){
    this.currenIndex++;
    this.CalculatePercentage();
  }

  Previous(){
    this.currenIndex--;
    this.CalculatePercentage();
  }
  
  reset(){
    this.currenIndex = 0;
    this.CalculatePercentage();
    
  }

  LoadData(){
    this.fetchdata.FetchAllQuestions().subscribe(
      res=>{
        this.AllQuestion = res.questions;
        this.startTimer();
      }
    )
  }

  CheckAnswer(data:Option){
    if(data.correct){
      this.points++;
      this.ChangeBg = 'green';
    }else{
      this.points--;
      this.ChangeBg = 'red';
    }
    setTimeout(()=>{
        this.next();
    },1000);
  }

  CalculatePercentage(){
    this.percentage = ((this.currenIndex/this.AllQuestion.length)*100).toString();
  }

  // Timer functions

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.next();
        this.points -= 10;
        this.timeLeft = 10;
      }
      if(this.AllQuestion.length  == this.currenIndex){
        this.pauseTimer();
      }
    },1000)
  }



  pauseTimer() {
    clearInterval(this.interval);
  }

}
