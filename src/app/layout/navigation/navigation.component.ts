import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface MenuIndex {
  menuIndex: number;
  submenuIndex: number;
}

export interface MenuItem {
  text: string;
  value: string;
  subMenu: Array<{
    text: string;
    value: string;
  }>
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navList: any[] = [ 
    {
      title: 'Clothing',
      src: '/products'
    },
    {
      title: 'Shoes',
      src: '/products'
    },
    {
      title: 'Bag',
      src: '/products'
    },
    {
      title: 'Accessories',
      src: '/products'
    },
    {
      title: 'In Stock',
      src: '/'
    },
    {
      title: 'Gallery',
      src: '/gallery'
    },
    {
      title: 'Press',
      src: '/press'
    },
    {
      title: 'About us',
      src: '/about'
    }
    ]
  innerList: string[] = ['All', 'Coats', 'Dresses','Shorts', 'Sweaters', 'Skirts', 'Jackets', 'Tops', 'Vests', 'Cardigans', 'Playsuit', 'Pants']
  investmentClasses: MenuItem[] = [
    {
      text: "clothing",
      value: "Clothing",
      subMenu: [
       { 
         text: 'CAD', 
         value: 'https://ca.finance.yahoo.com/quote/CADUSD=X/' 
       },
       { 
         text: 'USD', 
         value: 'https://ca.finance.yahoo.com/quote/CAD%3DX?p=CAD%3DX' 
       },
       { 
         text: 'BTC', 
         value: 'https://ca.finance.yahoo.com/quote/BTC-CAD/chart?p=BTC-CAD' 
       }
     ]
    },
    {
      text: "commodities",
      value: "commodity",
      subMenu: [
        { 
          text: 'Coffee', 
          value: 'https://ca.finance.yahoo.com/quote/KC%3DF/chart?p=KC%3DF' 
        },
        { 
          text: 'Oil', 
          value: 'https://ca.finance.yahoo.com/quote/CL%3DF/chart?p=CL%3DF' 
        },
        { 
          text: 'Natural Gas', 
          value: 'https://ca.finance.yahoo.com/quote/NG%3DF/chart?p=NG%3DF' 
        }
      ]
    },
    {
      text: "indices",
      value: "index",
      subMenu: [
        { 
          text: 'S&P500', 
          value: 'https://ca.finance.yahoo.com/quote/%5EGSPC/chart?p=%5EGSPC' 
        },
        { 
          text: 'TSX', 
          value: 'https://ca.finance.yahoo.com/quote/XIU.TO/chart?p=XIU.TO' 
        },
        { 
          text: 'DOW', 
          value: 'https://ca.finance.yahoo.com/quote/%5EDJI/chart?p=%5EDJI' 
        }
      ]
   },
   {
      text: "stocks",
      value: "stock",
      subMenu: [
        { 
          text: 'APPL', 
          value: 'https://ca.finance.yahoo.com/quote/AAPL/chart?p=AAPL' 
        },
        { 
          text: 'TSLA', 
          value: 'https://ca.finance.yahoo.com/quote/TSLA/chart?p=TSLA' 
        },
        { 
          text: 'MSFT', 
          value: 'https://ca.finance.yahoo.com/quote/MSFT/chart?p=MSFT' 
        }
      ]
   }
 ];

@Input()  public menuItems: Array<MenuItem> = [];
@Output() public itemSelected = new EventEmitter<MenuIndex>();

  constructor() { }

  ngOnInit(): void {
    this.menuItems = this.investmentClasses
  }
  onClick(event: MouseEvent, menuIndex: number, submenuIndex: number) {
    event.stopPropagation();
    this.itemSelected.emit({
      menuIndex: menuIndex,
      submenuIndex: submenuIndex
    });
    
  }
}
