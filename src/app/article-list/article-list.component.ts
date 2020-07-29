import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../common/article.model';
import { ArticleService } from '../common/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'edm-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  s1: Subscription;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }


  getArticles(): void {
    this.s1 = this.articleService.getArticles()
      .subscribe((articles) => {
        this.articles = articles;
      });
  }

  ngOnDestroy(): void {
    if(this.s1){
      this.s1.unsubscribe();
    }
  }

}
