import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loja-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.css']
})
export class SearchFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchByTitle(title: string) {
    console.log(title);
  }

  searchByArtist(artist: string) {
    console.log(artist);
  }

  searchByYear(min: number, max: number) {
    console.log(min, "até ", max);
  }
}
