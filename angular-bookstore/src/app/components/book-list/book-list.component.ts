import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  rupeesToDollar: number = 76.43;
  books: Book[];

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this._bookService.getBooks().subscribe((data) => {
      data.map(price => price.unitPrice /= this.rupeesToDollar);
      this.books = data;
    });
  }
}
