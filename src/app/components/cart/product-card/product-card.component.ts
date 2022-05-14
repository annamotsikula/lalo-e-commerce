import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  price: number = 0
  @Input() title: string = ''
  @Input() src: string = ''
  @Input() obj = {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
