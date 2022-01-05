import { Component, OnInit } from '@angular/core';
import { HeaderSevice } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public headerService:HeaderSevice
  ) { }
  
  ngOnInit(): void {
  }
  

}
