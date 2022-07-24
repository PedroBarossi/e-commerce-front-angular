import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'loja-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() albumList:Album[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

}
