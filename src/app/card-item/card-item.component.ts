import { Post } from './../post.interface';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit, OnChanges {
 
  @Input() post: Post;
  @Output() postSelected = new EventEmitter<Post>();

  constructor() {
    console.log('constructor');
   }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChange');
  }

  onMarkAsFavouriteClick():void {
    this.postSelected.emit(this.post);
  }
}
