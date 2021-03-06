import { Component, OnInit } from '@angular/core';
import { IDynamicCollection } from '../core/interfaces/collection.interface';
import { ICard } from '../core/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseSrc: string = '/assets/media'
  data_collection_1: IDynamicCollection = {
    headerText: 'New in',
    subText: 'Discover th latest launches onsite',
    buttonText: 'shop collection'
  }
  data_collection_2: IDynamicCollection = {
    subText: 'Shop and explore 2022 spring collection',
    buttonText: 'see all'
  }

  col_list : ICard[] = [
    {title: 'Gracy cardigan', price: 900},
    {title: 'Gracy cardigan', price: 900},
    {title: 'Gracy cardigan', price: 900},
    {title: 'Gracy cardigan', price: 900},
  ]
  col_list_2 : ICard[] = [
    {title: 'YOUR SPRING LOOK'},
    {title: 'YOUR SPRING LOOK'},
    {title: 'YOUR SPRING LOOK'},
    {title: 'YOUR SPRING LOOK'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
