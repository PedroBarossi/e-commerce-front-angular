import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'loja-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input()
  album!: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
