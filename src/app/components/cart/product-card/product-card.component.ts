import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../core/interfaces/product.interface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() navigateTo: string = ''
  @Input() id: number = 0
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
