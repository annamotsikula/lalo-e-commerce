import { Component, OnInit } from '@angular/core';
interface IFilter {
  title: string,
  items: string[]
}
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
