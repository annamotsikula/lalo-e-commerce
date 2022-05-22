import { Component, OnInit } from '@angular/core';
import { ICard, IFilter } from '../../core/interfaces/product.interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  hasCategory: boolean = false

  filterData: IFilter[] = [
    {
      title: 'Category',
      items: ['All', 'Coats', 'Dresses','Shorts', 'Sweaters', 'Skirts', 'Jackets', 'Tops', 'Vests', 'Cardigans', 'Playsuit', 'Pants']
    },
    { title: 'Color',
      items: ['All']
    },
    { title: 'Size',
      items: ['All']
    }
  ]
  productCard: ICard[] = [
    {
      title: 'Cardigan N1',
      price: 900
    },
    {
      title: 'Cardigan N2',
      price: 900
    },
    {
      title: 'Cardigan N3',
      price: 900
    },
    {
      title: 'Cardigan N4',
      price: 900
    },
    {
      title: 'Cardigan N5',
      price: 900
    },
    {
      title: 'Cardigan N6',
      price: 900
    },
    {
      title: 'Cardigan N7',
      price: 900
    },
    {
      title: 'Cardigan N8',
      price: 900
    },
]
  products = Array.from({length:8},()=> ({'hello':'goodbye'}))

  constructor() {
    
      // (item, index)=> {
      //  item.title = `Cardigan N${index+2}`
      //  item.price = '900 USD'
    //  }
    //  )
  }

  ngOnInit(): void {

    console.log(this.products)
  
  }

  
  showCategoryByID(index: number) {
   
  }

}
