import { Component, OnInit } from '@angular/core';
import { ICard } from '../../core/interfaces/product.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  baseSrc: string = '/assets/media/gallery'
  constructor() { }
  galleryList: ICard[] = [
    {
      title: 'YOUR SPRING LOOK',
      src: `${this.baseSrc}/g-2.png`
    },
    {
      title: 'ROMANTIC OUTFIT',
      src: `${this.baseSrc}/g-3.png`
    },
    {
      title: 'YOUR SPRING LOOK',
      src: `${this.baseSrc}/g-4.png`
    },
    {
      title: 'ROMANTIC OUTFIT',
      src: `${this.baseSrc}/g-5.png`
    },
   
    
  ]
  ngOnInit(): void {
   
  }

}
