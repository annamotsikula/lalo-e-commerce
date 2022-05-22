import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  myForm: FormGroup;
  chosenImg: string = '';
  imgPreview: any[] = [
    { 
      id: 1,
      src: "assets/media/product/product-detail.png"
    },
    { 
      id: 2,
      src: "assets/media/product/card-template.png"
    },
  ]
  productDetail = {
    title: "Peony sweater",
    price: "900 USD",
    color: [
      {
        code: '#EF2D73',
        palette: 'pink',
        checked: false
      },
      {
        code: '#EFEFEF',
        palette: 'white',
        checked:true
      },
    ],
    size: ['x-small', 'small', 'medium','large',]
  }
  constructor() { 
    this.myForm = new FormGroup({
    name: new FormControl('Sammy'),
    email: new FormControl(''),
    message: new FormControl(''),
  
  })

}
  ngOnInit() {
    this.chosenImg = this.imgPreview[0].src
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
  setImgPreview(img: any) {
    this.chosenImg = img.src

  }
 
  getBoxShadow(code: string) {
    let c = new Set<string>()
    console.log()
    return '0 0 0 1px ' + code
  }
}
