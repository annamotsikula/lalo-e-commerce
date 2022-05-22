import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
interface ICard {
  title: string,
  price? : number | null
}
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  price: number = 900
  @Input() title: string = 'Cardigan N1'
  @Input() id: number = 0
  @Input() src: string = ''
  @Output() getValueFromClick = new EventEmitter<any>()
  @Input() cardDetail: ICard = {
    title: ''
  }
  constructor(private _router: Router) { }
  ngOnInit(): void {
  }
  sendValues() {
    this.getValueFromClick.emit(this.id)
  }
  redirectToDetails() {
    // this._router.navigate(['/products', id : this.id])
  }
}
