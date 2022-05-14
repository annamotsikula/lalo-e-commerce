import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'btn-shop',
  templateUrl: './btn-shop.component.html',
  styleUrls: ['./btn-shop.component.scss']
})
export class BtnShopComponent implements OnInit {

  @Input() bHead: string = 'shop collection'
  @Input() bStyle: string = ''
  @Output() onClick = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  getBtnStyle(): string {
    switch(this.bStyle) {
			case 'transparent': 
				return 'btn-transparent'
			case 'bw':
				return 'btn-bw'
      case 'underline':
				return 'btn-underline'
		}
    return ''
  }
  clickEvent() {
    this.onClick.emit()
    console.log('click detected')
  }

}
