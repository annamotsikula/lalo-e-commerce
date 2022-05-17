import { Component, OnInit } from '@angular/core';
import { IDynamicCollection } from '../core/interfaces/collection.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data_collection_1: IDynamicCollection = {
    headerText: 'New in',
    subText: 'Discover th latest launches onsite',
    buttonText: 'shop collection'
  }
  data_collection_2: IDynamicCollection = {
    subText: 'Shop and explore 2022 spring collection',
    buttonText: 'see all'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
