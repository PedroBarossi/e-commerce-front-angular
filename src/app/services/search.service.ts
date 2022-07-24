import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = 'https://sheet.best/api/sheets/769df4f5-4067-4349-b1aa-f62a9e53c406';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.apiUrl, this.httpOptions);
  }

  searchByTitle(titulo: string):Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiUrl}/titulo/*${titulo}*`);
  }

  searchByArtist(artista: string):Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiUrl}/artista/*${artista}*`);
  }

  searchByYear(min: number, max: number):Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiUrl}/query?ano=__gte(${min})&ano=__lte(${max})`);
  }

}
