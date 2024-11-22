import { Component, inject, OnInit, signal } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { book } from '../model/book.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-objectlist',
  standalone: true,
  imports: [],
  templateUrl: './objectlist.component.html',
  styleUrl: './objectlist.component.scss'
})
export class ObjectlistComponent implements OnInit{
  bookService = inject(BooksService);
  libraryLog = signal<Array<book>>([]);

  ngOnInit(): void {
      this.bookService.getLibraryCatalogue().pipe(
        catchError((err)=> {
          console.log(err);
          throw err;
        })
      ).subscribe((books) => {
        this.libraryLog.set(books)
      })
  }
}
