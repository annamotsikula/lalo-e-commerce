import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  myForm: FormGroup;

  constructor() { 
    this.myForm = new FormGroup({
    name: new FormControl('Sammy'),
    email: new FormControl(''),
    message: new FormControl('')
  })

}
  


  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
  setImgPreview() {}
}
