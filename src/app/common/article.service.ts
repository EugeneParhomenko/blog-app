import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor(
  private http: HttpClient
) { }

public getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>('http://localhost:8000/articles');
}

public getArticle(key: string): Observable<Article> {
  return this.http.get<Article>('http://localhost:8000/articles/' + key);
}

}
