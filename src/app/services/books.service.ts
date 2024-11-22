import { inject, Injectable,signal } from '@angular/core';
import { book } from '../components/model/book.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  http = inject(HttpClient);
  private httpOptions: any;

  constructor(){
    this.httpOptions = {
      observe: 'body', 
      responseType: 'json'
    };
  }
  
  getLibraryCatalogue() {
    const apiEndpointUrl = 'http://127.0.0.1:5000/objects';
    const response = this.http.get<Array<book>>(apiEndpointUrl);
    console.log(response);
    return response;
  }
}
