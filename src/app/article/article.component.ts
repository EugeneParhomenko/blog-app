import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../common/article.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'edm-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  article: Article = new Article();
  s1: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articleservice: ArticleService
  ) { }

  ngOnInit(): void {
    this.s1 = this.route.params.subscribe((params) => {
      const key = params.key;
      this.articleservice.getArticle(key)
        .subscribe(article => {
          if (article === undefined) {
            return;
          }
          this.article = article;
          console.log(this.article);
        })
    });
  }

  ngOnDestroy(): void {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
