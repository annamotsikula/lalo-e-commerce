import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navList: string[] = [ 'Clothing','Shoes','Bag','Accessories','In Stock','Gallery', 'Press','About us' ]

  constructor() { }

  ngOnInit(): void {
  }

}
