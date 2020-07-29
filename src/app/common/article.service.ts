import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article.model';
import { ARTICLES } from '../mock-articles'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor() { }

public getArticles(): Observable<Article[]> {
  const articles: Article[] = ARTICLES;
  return of(articles);
}

public getArticle(key: string): Observable<Article> {
  const articles: Article[] = ARTICLES.filter(a => a.key === key);
  return of(articles[0]);
}

}
