import { Component, OnInit } from '@angular/core';
import { Post } from './../post.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  posts: Post[];

  constructor() { 
    this.posts = [
      {
        id:1,
        title:' Anna Karenina ',
        content:'Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky.',
        author:'Leo Tolstoy',
        publishDate: '11.02.2003'
      },
      {
      id:2,
      title:' Madame Bovary',
      content:'For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for "offenses against morality and religion.',
      author:' Gustave Flaubert',
      publishDate: '28.07.2010'
      },
      {
        id:3,
        title:'War and Peace ',
        content:'Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon',
        author:'Leo Tolstoy',
        publishDate: '11.02.2003'
      },
      {
       id:4,
       title:'The Great Gatsby',
       content:'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". ',
       author:'F. Scott Fitzgerald',
       publishDate: '01.10.2009'
      },
      {
        id:5,
        title:'Lolita',
        content:'The book is internationally famous for its innovative style and infamous for its controversial subject:',
        author:'Vladimir Nabokov',
        publishDate: '11.02.2018'
      },
      {
        id:6,
        title:'Moby Dick',
        content:'irst published in 1851, Melvilles masterpiece is, in Elizabeth Hardwicks words, "the greatest novel in American literature.',
        author:'L Herman Melville',
        publishDate: '11.02.2003'
      }

    ]
  }

  ngOnInit(): void {
  }

}
