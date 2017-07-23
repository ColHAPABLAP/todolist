import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from './list/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: TodoItem[];

  title = 'app works!';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<TodoItem[]>('http://localhost:9000/list').subscribe(data => {
      this.items = data;
    });
  }
}
