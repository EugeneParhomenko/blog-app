import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../common/article.model';
import { ArticleService } from '../common/article.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'edm-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  s1: Subscription;

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getArticles();
    this.titleService.setTitle('Статьи' + this.sharedService.blogTitle);
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
