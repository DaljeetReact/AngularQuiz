import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName:string ='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  StartQuiz(){
    if(this.userName.length == 0){
      alert('Incorrect User value');
      return;
    }
    localStorage.setItem('userName',this.userName);
    this.router.navigate(['/qustions']);
  }
}
