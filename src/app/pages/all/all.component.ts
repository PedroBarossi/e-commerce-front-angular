import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'loja-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  albumList: Array<Album> = [];

  constructor(private searchService: SearchService) {
   
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.searchService.getAll().subscribe({
      next: (response) => this.albumList = response,
      error: (err) => console.log("ERRO AO EXECUTAR", err)
    })
  }

}
