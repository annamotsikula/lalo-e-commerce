import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navList: string[] = [ 'Clothing','Shoes','Bag','Accessories','In Stock','Gallery', 'Press','About us' ]
  innerList: string[] = ['All', 'Coats', 'Dresses','Shorts', 'Sweaters', 'Skirts', 'Jackets', 'Tops', 'Vests', 'Cardigans', 'Playsuit', 'Pants']

  constructor() { }

  ngOnInit(): void {
  }

}
