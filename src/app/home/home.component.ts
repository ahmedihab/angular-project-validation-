import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserserviceService]
  
})
export class HomeComponent implements OnInit {

  myData:any;

  constructor(_userService:UserserviceService) {

    _userService.getHomeData().subscribe((data)=>{
      this.myData = data
      console.log(this.myData)
    })

   }

  ngOnInit(): void {
  }

}
